$(function(){
    var currentValue = 0;
    var isDrag = false;
    var precoMaximo = 70000
    var precoPesquisa = 0

    $('.pointer-barra').mousedown(function(){
        isDrag = true;

    })
    $(document).mouseup(function(){
        isDrag = false
        enableTextSelection();
    })

    $('.barra-preco').mousemove(function(e){
        if(isDrag==true){
            disableTextSelection();
            var elBase = $(this);
            var mouseX = e.pageX - elBase.offset().left;
            if(mouseX <0)mouseX = 0
            else if(mouseX > elBase.width())mouseX = elBase.width();

            $('.pointer-barra').css('left',(mouseX-13)+'px')

            currentValue = (mouseX / elBase.width()) * 100;
            console.log(currentValue);
            $('.barra-preco-fil').css('width',currentValue+'%');

            preçoAtual =(currentValue/100) * precoMaximo
            preçoAtual = formatarPreço(preçoAtual)
            $('.precoPesquisa').html('R$'+preçoAtual)
            
        }
    })

    function formatarPreço(preçoAtual){
        preçoAtual = preçoAtual.toFixed(2);
        var preco_arr = preçoAtual.split(".");
        var novoPreco = foramatarTotal(preco_arr);
        return novoPreco;
    }

    function foramatarTotal(preco_arr){ 
        
            if(preco_arr[0] < 1000){
                return preco_arr[0]+','+preco_arr[1]
            }
            else if(preco_arr[0] < 10000){
                return preco_arr[0][0]+'.'+preco_arr[0].substr(1,preco_arr[0])+','+preco_arr[1];
            }
            else{
                return preco_arr[0][0]+preco_arr[0][1]+'.'+preco_arr[0].substr(2,preco_arr[0])+','+preco_arr[1]
            }
        
    }

    function disableTextSelection(){
        $('body').css("user-select","none")
        $('body').css("-moz-user-select","none")
        $('body').css("-ms-user-select","none")
        $('body').css("-webkit-user-select","none")
        $('body').css("-o-user-select","none")
      
    }

    function enableTextSelection(){
        $('body').css("user-select","auto")
        $('body').css("-moz-user-select","auto")
        $('body').css("-ms-user-select","auto")
        $('body').css("-webkit-user-select","auto")
        $('body').css("-o-user-select","auto")
    }
})