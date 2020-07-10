$(document).ready(function () {
    
    $('.sectionCCAP--divCategorias--articleCategorias .sectionCCAP--divCategorias--articleCategorias__Categoria[category="all"]').addClass('categoriaActiva');

    $('.sectionCCAP--divCategorias--articleCategorias__Categoria').click(function () { 
        var cateArticulo = $(this).attr('category');
        console.log(cateArticulo);

        $('.sectionCCAP--divCategorias--articleCategorias__Categoria').removeClass('categoriaActiva');
        $(this).addClass('categoriaActiva');

        $('.sectionCCAP--divCCAP--articleCCAP').hide();
        $('.sectionCCAP--divCCAP--articleCCAP[category="'+cateArticulo+'"]').show('');
    });

    $('.sectionCCAP--divCategorias--articleCategorias__Categoria[category="all"]').click(function () { 
        $('.sectionCCAP--divCCAP--articleCCAP').show('');
        
    });

});