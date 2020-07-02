$(document).ready(function () {
    
    $('.divCategorias--articleCategorias .articleCategorias__Categoria[category="all"]').addClass('categoriaActiva');

    $('.articleCategorias__Categoria').click(function () { 
        var cateArticulo = $(this).attr('category');
        console.log(cateArticulo);

        $('.articleCategorias__Categoria').removeClass('categoriaActiva');
        $(this).addClass('categoriaActiva');

        $('.divCCAP--articleCCAP').hide();
        $('.divCCAP--articleCCAP[category="'+cateArticulo+'"]').show('');
    });

    $('.articleCategorias__Categoria[category="all"]').click(function () { 
        $('.divCCAP--articleCCAP').show('');
        
    });

});