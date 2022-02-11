# Leafers

# README.md on progress

# Training result
| Code  | dataset       | Augmentations          | Method                       | scale          | data add | Best val\_acc train | diff  | Predict Top1 acc | Predict Top5 acc |
| ----- | ------------- | ---------------------- | ---------------------------- | -------------- | -------- | ------------------- | ----- | ---------------- | ---------------- |
| 6     | flower400     | max scale              | effNetv1b0                   | 224, \[-1,1\]  | 1        | 7061                |       |                  |                  |
| 7     | flower400     | max scale              | effNetv1b1                   | 240, \[-1,1\]  | 1        | 7019                |       |                  |                  |
| 8     | flower400     | max scale + cut max    | effNetv1b1                   | 240, \[-1,1\]  | 1        | 6916                |       |                  |                  |
| 9     | flower258     | max scale              | effNetv1b1                   | 240, \[-1,1\]  | 0        | 8414                | \-574 | 7840             | 9300             |
| 10    | flower258     | max scale + RandAug    | Official effNetv2b1          | 240, \[0,255\] | 0        | 8436                | \-96  | 8340             | 9495             |
| 11    | flower258     | max scale + RandAug    | MobienetV3                   | 224, \[0,255\] | 0        | 8073                | \-173 | 7900             | 9339             |
| ex    | flower258     |                        | 9,10,11 ensembles Sum output |                |          |                     | N/A   | 7963             | 9383             |
| ex    | flower258     |                        | 9,10,11 ensembles Voting     |                |          |                     | N/A   | 7835             | N/A              |
| 12    | flower258     | max scale              | effNetv1b3                   | 300, \[-1,1\]  | 0        | 8403                | \-637 | 7766             | 9273             |
| 13    | flower400     | max scale + RandAug    | Official effNetv2b3          | 300, \[0,255\] | 0        | 7323                | \-100 | 7223             | 9279             |
| 14    | flower258     | max scale + RandAug    | Official effNetvb2           | 260, \[0,255\] | 0        | 8313                | \-175 | 8138             | 9442             |
| 15    | flower258     | max scale + RandAug    | Official effNetvb0           | 224, \[0,255\] | 0        | 8752                | \-90  | 8662             | 9583             |
| 16    | flower400     | max scale + RandAug    | Official effNetv2b0          | 224, \[0,255\] | 0        | 7316                | \-88  | 7228             | 9257             |
| 17    | flower400     | max scale + RandAug    | 13,16 ensembles stacking     | 300, \[0,255\] | 0        | 7602                | \-51  | 7551             | 9375             |
| 18    | flower400     | max scale + cutMix     | Official effNetv2b1          | 240, \[0,255\] | 0        | 7363                | \-354 | 7009             | 9183             |
| 19    | flower400     | none                   | Official effNetb0            | 224, \[0,255\] | 0        | 7417                | \-328 | 7089             | 8604             |
| 19 EX | flower400 raw | none                   | Official effNetb0            | 224, \[0,255\] | 0        | 7318                | \-223 | 7095             |                  |
| 20    | flower400     | RandAug cont' 19 model | Official effNetb0            | 224, \[0,255\] | 0        | 7445                | \-390 | 7055             | 8482             |
| 21    | flower400     | max scale + RandAug    | Official effNetv2b1          | 240, \[0,255\] | 0        | 7417                | \-111 | 7306             | 9330             |
| 22    | flower400     | max scale + RandAug    | 13,16, 21 ensembles stacking | 300, \[0,255\] | 0        | 7726                | 5     | 7731             | 9475             |