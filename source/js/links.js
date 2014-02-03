// Open in new tab
$(function() {
  // External links
  $("a[href^='http']").attr('target', '_blank');
  // PDF links
  $("a[href$='.pdf']").attr('target', '_blank');
});
