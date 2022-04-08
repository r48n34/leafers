# Call api

## predict flowers by url (imugr ...)
```  
method: GET
params: url

https://fypflowerpredict.azurewebsites.net/api/flowersPredict?code=s/LY8AdrfLiZcbC6kfxarL55Q4xZKiJ79IWOWh5iLW3neQFofdFayQ==&url=<yourImagesUrl>

e.g. https://fypflowerpredict.azurewebsites.net/api/flowersPredict?code=s/LY8AdrfLiZcbC6kfxarL55Q4xZKiJ79IWOWh5iLW3neQFofdFayQ==&url=https://i.imgur.com/b34isCw.jpeg
```

## predict flowers by images blob
```  
method: POST
Use test.html for demo.

```

## get current model data
```  
method: GET
https://fypflowerpredict.azurewebsites.net/api/modelDataReturn?code=7yWafRksScQHwoYS7sy3OeAx7vIwgI2hsahJ5fQTG3nggnMKkdpbBQ==

```