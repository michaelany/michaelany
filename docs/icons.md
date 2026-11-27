# Icon sizing and export

In Sketch, center the artwork in a transparent **24 × 24 Graphic** and keep its
proportions locked. Material uses **20 × 20** for circles, **18 × 18** for squares
and **20 × 16** or **16 × 20** for rectangles as starting points. Compare icons
at 100% zoom, then export the entire Graphic as SVG with `viewBox="0 0 24 24"`.
[Material Design icon grid](https://m2.material.io/design/iconography/system-icons.html)

At the default root size, regular buttons and 48 px FABs use **24 px** icons.
Large buttons and 56 px FABs use **32 px** icons. The theme sets standalone MUI
`SvgIcon` sizes `small` and `medium` to **24 px** and **32 px**. Regular and large
text buttons have minimum heights of **3rem** and **4rem**.

Sizes follow the original vector outlines and are rounded to two decimal places.

| SVG              | Artwork (W × H) | Set in Sketch |
| ---------------- | --------------- | ------------- |
| `7glyphs.svg`    | 18 × 18         | Height 18     |
| `airbnb.svg`     | 18.62 × 20      | Height 20     |
| `apple.svg`      | 14.66 × 18      | Height 18     |
| `everpoint.svg`  | 17.10 × 20      | Height 20     |
| `github.svg`     | 20 × 19.51      | Width 20      |
| `googleplay.svg` | 17.06 × 19      | Height 19     |
| `instagram.svg`  | 20 × 20         | Height 20     |
| `linkedin.svg`   | 18 × 18         | Width 18      |
| `mui.svg`        | 20 × 17.50      | Width 20      |
| `react.svg`      | 20 × 17.97      | Width 20      |
| `telegram.svg`   | 20 × 16.67      | Width 20      |
