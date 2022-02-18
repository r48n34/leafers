# Leafers
A final year project of using deep learning CNN models for predicting Hong Kong plants images.  
<img src="assert/postreFirstPage.png" width="600" alt="project_logo"/>

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

### Images classifications 

**Model choosing**: Tensorflow 2.8 EfficientNetV2 / EfficientNet / MobienetV3 series    
**Data spliting**: 80% Training & 20% Validations    

**Max scale mtehod**: Scale up all classes that below a number of the max images classes  
**Max scale Flower400**: Flower400: 276550 Training & 17369 Validations    
**Max scale Flower258**: Flower400: 504598 Training & 17369 Validations    

### Object detections  

**Model choose** : yolov5 small  
**Data** : 1067 training & 100 validations  

# Training result

### flower258
| Code  | Aug                    | Method                       | Scale          | Train Top1 | diff  | Predict Top1 | Predict Top5 |
| ----- | ---------------------- | ---------------------------- | -------------- | ---------- | ----- | ------------ | ------------ |
| 10    | max scale + RandAug    | Official effNetv2b1          | 240, \[0,255\] | 8436       | \-96  | 8340         | 9495         |
| 11    | max scale + RandAug    | MobienetV3                   | 224, \[0,255\] | 8073       | \-173 | 7900         | 9339         |
| ex    |                        | 9,10,11 Sum output           |                |            | N/A   | 7963         | 9383         |
| ex    |                        | 9,10,11 Voting               |                |            | N/A   | 7835         | N/A          |
| 12    | max scale + Nornal Aug | effNetv1b3                   | 300, \[-1,1\]  | 8403       | \-637 | 7766         | 9273         |
| 14    | max scale + RandAug    | Official effNetvb2           | 260, \[0,255\] | 8313       | \-175 | 8138         | 9442         |
| 15    | max scale + RandAug    | Official effNetvb0           | 224, \[0,255\] | 8752       | \-90  | 8662         | 9583         |  

### flower400
| Code  | Aug                    | Method                       | Scale          | Train Top1 | diff  | Predict Top1 | Predict Top5 |
| ----- | ---------------------- | ---------------------------- | -------------- | ---------- | ----- | ------------ | ------------ |
| 13    | max scale + RandAug    | Official effNetv2b3          | 300, \[0,255\] | 7323       | \-100 | 7223         | 9279         |
| 16    | max scale + RandAug    | Official effNetv2b0          | 224, \[0,255\] | 7316       | \-88  | 7228         | 9257         |
| 17    | max scale + RandAug    | 13,16 stacking               | 300, \[0,255\] | 7602       | \-51  | 7551         | 9375         |
| 18    | max scale + CutMix     | Official effNetv2b1          | 240, \[0,255\] | 7363       | \-354 | 7009         | 9183         |
| 19    | none                   | Official effNetb0            | 224, \[0,255\] | 7417       | \-328 | 7089         | 8604         |
| 20    | RandAug cont 19 model  | Official effNetb0            | 224, \[0,255\] | 7445       | \-390 | 7055         | 8482         |
| 21    | max scale + RandAug    | Official effNetv2b1          | 240, \[0,255\] | 7417       | \-111 | 7306         | 9330         |
| 22    | max scale + RandAug    | 13,16,21 stacking            | 300, \[0,255\] | 7726       | +5    | 7731         | 9475         |

### YoloV5 Best.pt

| train/box_loss | train/obj_loss | metrics/precision | metrics/recall | metrics/mAP_0.5 | metrics/mAP_0.5:0.95 | val/box_loss | val/obj_loss |
|----------------|----------------|-------------------|----------------|-----------------|----------------------|--------------|--------------|
| 0.023474       | 0.023782       | 0.9516            | 0.77108        | 0.87833         | 0.63541              | 0.031121     | 0.012252     |


# Special Thanks
[Hong Kong Herbarium](https://herbarium.gov.hk/en/about-us/news/whats-new/index-id-5.html)