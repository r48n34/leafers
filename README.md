# Leafers
A final yaer project of using deep learning CNN models for predicting Hong Kong plants images.

# README.md on progress

# Dataset
Both dataset share the same attributes:  
**Images number**: 86880  

### flower400
Dataset that contains 400 types of flowers occur in Hong Kong.    
Url: https://www.kaggle.com/r48n34/flower400   
 
### flower258
Dataset that contains 258 types of flowers occur in Hong Kong, group by genus.   
Url: https://www.kaggle.com/r48n34/flower258  

# Training params
**Model choosing**: Tensorflow 2.8 EfficientNetV2 / EfficientNet / MobienetV3 series    
**Data spliting**: 80% Training & 20% Validations    

**Max scale mtehod**: Scale up all classes that below a number of the max images classes  
**Max scale Flower400**: Flower400: 276550 Training & 17369 Validations    
**Max scale Flower258**: Flower400: 504598 Training & 17369 Validations    

# Training result
| Code  | dataset       | Aug                    | Method                       | scale          | data add | Train Top1 | diff  | Predict Top1 | Predict Top5 |
| ----- | ------------- | ---------------------- | ---------------------------- | -------------- | -------- | ---------- | ----- | ------------ | ------------ |
| 6     | flower400     | max scale + Nornal Aug | effNetv1b0                   | 224, \[-1,1\]  | 1        | 7061       |       |              |              |
| 7     | flower400     | max scale + Nornal Aug | effNetv1b1                   | 240, \[-1,1\]  | 1        | 7019       |       |              |              |
| 8     | flower400     | max scale + cutMix     | effNetv1b1                   | 240, \[-1,1\]  | 1        | 6916       |       |              |              |
| 9     | flower258     | max scale + Nornal Aug | effNetv1b1                   | 240, \[-1,1\]  | 0        | 8414       | \-574 | 7840         | 9300         |
| 10    | flower258     | max scale + RandAug    | Official effNetv2b1          | 240, \[0,255\] | 0        | 8436       | \-96  | 8340         | 9495         |
| 11    | flower258     | max scale + RandAug    | MobienetV3                   | 224, \[0,255\] | 0        | 8073       | \-173 | 7900         | 9339         |
| ex    | flower258     |                        | 9,10,11 Sum output           |                |          |            | N/A   | 7963         | 9383         |
| ex    | flower258     |                        | 9,10,11 Voting               |                |          |            | N/A   | 7835         | N/A          |
| 12    | flower258     | max scale + Nornal Aug | effNetv1b3                   | 300, \[-1,1\]  | 0        | 8403       | \-637 | 7766         | 9273         |
| 13    | flower400     | max scale + RandAug    | Official effNetv2b3          | 300, \[0,255\] | 0        | 7323       | \-100 | 7223         | 9279         |
| 14    | flower258     | max scale + RandAug    | Official effNetvb2           | 260, \[0,255\] | 0        | 8313       | \-175 | 8138         | 9442         |
| 15    | flower258     | max scale + RandAug    | Official effNetvb0           | 224, \[0,255\] | 0        | 8752       | \-90  | 8662         | 9583         |
| 16    | flower400     | max scale + RandAug    | Official effNetv2b0          | 224, \[0,255\] | 0        | 7316       | \-88  | 7228         | 9257         |
| 17    | flower400     | max scale + RandAug    | 13,16 stacking               | 300, \[0,255\] | 0        | 7602       | \-51  | 7551         | 9375         |
| 18    | flower400     | max scale + cutMix     | Official effNetv2b1          | 240, \[0,255\] | 0        | 7363       | \-354 | 7009         | 9183         |
| 19    | flower400     | none                   | Official effNetb0            | 224, \[0,255\] | 0        | 7417       | \-328 | 7089         | 8604         |
| 19 EX | flower400 raw | none                   | Official effNetb0            | 224, \[0,255\] | 0        | 7318       | \-223 | 7095         |              |
| 20    | flower400     | RandAug cont 19 model  | Official effNetb0            | 224, \[0,255\] | 0        | 7445       | \-390 | 7055         | 8482         |
| 21    | flower400     | max scale + RandAug    | Official effNetv2b1          | 240, \[0,255\] | 0        | 7417       | \-111 | 7306         | 9330         |
| 22    | flower400     | max scale + RandAug    | 13,16,21 stacking            | 300, \[0,255\] | 0        | 7726       | +5    | 7731         | 9475         |

# Special Thanks
[Hong Kong Herbarium](https://herbarium.gov.hk/en/about-us/news/whats-new/index-id-5.html)