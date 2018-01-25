var panelgroup = [];
/*
*   跳跃高度范围:30-140
*
*
* */
function CreatePanel(context) {
    if(panelgroup[panelgroup.length-1].y >=0){

        var minHeight = panelgroup[panelgroup.length-1].y;
        if(GameData.probability >= Random(0,100)){
            var status = 0;
        }else{
            var status = 1;
        }
        var PanelX = Random(0,508);
        var PanelY = minHeight - Random(GameData.level,140);

        panelgroup.push({
            x:PanelX,
            y:PanelY,
            status:status
        });
    }
}