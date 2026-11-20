# The World Today — 20 November 2026

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/xJPtea/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/xJPtea/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

An entry for the make.fun bounty "Sum up 20 November's world news in one
image". The image is a newspaper front page for Friday, 20 November 2026.

## The day's news

The lead story is Russia's overnight ballistic-missile attack on Kyiv,
which damaged bridges over the Dnipro. The other six stories: Taiwan flags
about 2,700 China-linked accounts to Meta; Prabowo meets Xi; the dollar
nears a 19-month high as the AI sell-off deepens; oil rises after Houthi
attacks on Riyadh; Jakarta presses Google over 19,000 removed YouTube
channels; and a Seoul court upholds the acquittal of Kakao founder
Kim Beom-su. Every story is listed with its source in [NEWS.md](NEWS.md).

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` from the
repository root to the output directory. It refuses to run when the image
is missing or over the 1 MiB limit, and it checks that the copied bytes
match the source exactly. `test.mjs` runs the program twice and requires
both runs to write byte-identical output.

    mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
    node test.mjs

`entry.png` is 1024 by 1024 pixels, a PNG of about 617 KB. The hero art
of Kyiv at night is an original illustration made for this entry; all
text on the page was drawn with code, so it stays sharp and spelled right.
