from pathlib import Path

import numpy as np
from PIL import Image

src = Path(
    r"C:\Users\Admin\.cursor\projects\d-personal-projects-tina-designer-studio\assets"
    r"\c__Users_Admin_AppData_Roaming_Cursor_User_workspaceStorage_fa792830c12f201165fc41b771da8b27_images"
    r"_IMG_2429-cc9d9556-ccb6-4841-ba83-00bbcc069ffe.png"
)
out = Path(__file__).resolve().parents[1] / "public" / "images" / "engrave-bg.png"

im = Image.open(src).convert("RGBA")
w, h = im.size

# Keep only the mandala area above the text
top = im.crop((0, 0, w, int(h * 0.52)))
arr = np.array(top, dtype=np.float32)
r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]

luminance = 0.299 * r + 0.587 * g + 0.114 * b

# Black line art with soft anti-alias alpha
alpha = np.clip((95 - luminance) * 4.2, 0, 255)

out_arr = np.zeros((top.height, top.width, 4), dtype=np.uint8)
out_arr[:, :, 0] = 0
out_arr[:, :, 1] = 0
out_arr[:, :, 2] = 0
out_arr[:, :, 3] = alpha.astype(np.uint8)

result = Image.fromarray(out_arr, "RGBA")

# Trim transparent padding
bbox = result.getbbox()
if not bbox:
    raise SystemExit("no mandala content found")

result = result.crop(bbox)

pad = 20
side = max(result.size) + pad * 2
canvas = Image.new("RGBA", (side, side), (0, 0, 0, 0))
ox = (side - result.width) // 2
oy = (side - result.height) // 2
canvas.paste(result, (ox, oy), result)

out.parent.mkdir(parents=True, exist_ok=True)
canvas.save(out, "PNG")
print(f"saved {out} ({canvas.size[0]}x{canvas.size[1]})")
