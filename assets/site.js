document.addEventListener("DOMContentLoaded", function () {
  var toggleButtons = document.querySelectorAll("[data-panel]");

  toggleButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var panelId = button.getAttribute("data-panel");
      var panel = document.getElementById(panelId);

      if (!panel) {
        return;
      }

      var isExpanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isExpanded));
      panel.hidden = isExpanded;
    });
  });
});
