function show() {
    let x = document.getElementById('box');
    if (box.style.transform == 'translateX(-350px)') {
        box.style.transform = 'translateX(0)';
    } else {
        box.style.transform = 'translateX(-350px)';
    }

}
    // function myfunction () {
    //     let suits = document.getElementById ('suits')
    //     suits.style.display = 'block'
    // }
    // function hide () {
    //     let suits = document.getElementById ('suits')
    //     suits.style.display = 'none'
    // }
    function myfunction (){
        let suits = document.getElementById ('suits')
        if (  suits.style.display == 'none'){
            suits.style.display = 'block';
      
        }else {
        suits.style.display = 'none'
    }
    }
    function hide (){
        let suits = document.getElementById ('suits')
        suits.style.display = 'none';
   
    }

    function myextention () {
        let ext = document.getElementById ('ext')
            if (ext.style.display == 'none' ) {
                ext.style.display = 'block';
            }else {
                ext.style.display = 'none';
            }

    }
    function exthide () {
        let ext = document.getElementById ('ext')
        ext.style.display = 'none'
    }

    function mywp() {
        let WP= document.getElementById ('WP')
        WP.style.display = 'block'
    }
    function yhide () {
        let WP = document.getElementById ('WP')
        WP.style.display = 'none'
    }

    function buywp () {
        let Buy_wp= document.getElementById ('Buy_wp')
        Buy_wp.style.display = 'block'
    }
    function zhide () {
        let Buy_wp = document.getElementById ('Buy_wp')
        Buy_wp.style.display = 'none'
    }

    function Document () {
        let docs= document.getElementById ('docs')
        docs.style.display = 'block'
    }
    function yzhide () {
        letdocs = document.getElementById ('docs')
        docs.style.display = 'none'
    }

    function increase () {
        let num = parseInt (document.querySelector('#txt').value);
        num++;
        document.querySelector('#txt').value = num;
    }
    function decrease (){
        let num = parseInt (document.querySelector('#txt').value);
        num--;
        document.querySelector('#txt').value = num ;
    }