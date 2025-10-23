const avanca = document.querySelectorAll('.bnt-proximo')
console.log(avanca)

avanca.forEach(button=>{
    button.addEventListener('click',function(){
        const atual = Document.querySelector('.ativo')
      const proximoPasso = 'passo-'+ this.getAttribute('data-proximo')
    atual.classLit.remove('ativo')
document.getElementById(proximoPasso).classLit.add('ativo')
})
 })   