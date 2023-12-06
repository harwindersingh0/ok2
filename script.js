$(document).ready(function () {
    // Interactions
    $('.draggable').draggable();
    $('.droppable').droppable({
      drop: function (event, ui) {
        $(this)
          .addClass("ui-state-highlight")
          .find("p")
          .html("Item Dropped!");
      }
    });
    $('.resizable').resizable();
    $('.selectable ul').selectable();
  
    // Sample dictionary of words for spellcheck (replace with a larger dictionary if needed)
    var dictionary = [
        "apple", "banana", "orange", "grape", "pineapple", "watermelon", "kiwi", "strawberry",
        "javascript", "python", "java", "c", "c++", "ruby", "swift", "typescript", "php","c#","Database",
      ];
      
  
    // Autocomplete initialization for spellcheck
    $("#autocomplete").autocomplete({
      source: function (request, response) {
        var term = request.term.toLowerCase();
        var suggestions = $.grep(dictionary, function (item) {
          return item.indexOf(term) === 0;
        });
        response(suggestions);
      },
      minLength: 1 // Minimum characters before suggesting (1 or more)
    });
  
    // Other widgets and effects initialization remain unchanged
    $("#accordion").accordion();
    $("#datepicker").datepicker();
    $("#slider").slider();
  
    $(".hideShow").on("click", function () {
      $(".effect-div").toggle("explode", { pieces: 16 }, 1000);
    });
  
    $(".explode").on("click", function () {
      $(".effect-div").effect("explode", { pieces: 16 }, 1000);
    });
  
    $(".fadeInOut").on("click", function () {
      $(".effect-div").fadeOut().fadeIn();
    });
  
    $(".colorAnimate").on("click", function () {
      $(".effect-div").animate({ backgroundColor: "yellow", color: "blue" }, 1000);
    });
  });
  