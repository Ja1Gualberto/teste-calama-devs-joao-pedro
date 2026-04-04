function marcarLinkAtual() {
  const url_atual = window.location.href;
  const nav_links = document.querySelectorAll('.navbar .elementos a');
  
  nav_links.forEach(link => {
    if (link.href === url_atual) {
      link.classList.remove('text-decoration-none');
      link.classList.add('link-ativo');
    }
  });
}