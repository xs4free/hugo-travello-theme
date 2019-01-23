// Static comments
// from: https://github.com/eduardoboucas/popcorn/blob/gh-pages/js/main.js
(function ($) {
    $('.comments-area').find('a.reply').click(function(){
      var commentId = this.id;
      $('[name="fields[replyTo]"]').val(commentId);
    });

    $(':input[type="submit"]').addClass("hide");

    $('.js-form').submit(function (event) {
      event.preventDefault();
      
      var form = this;
  
      disableForm(form);

      $.ajax({
        type: $(form).attr('method'),
        url: $(form).attr('action'),
        data: $(form).serialize(),
        contentType: 'application/x-www-form-urlencoded'
      })
      .done(function() {
        showSucceededMessage(form);
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log(errorThrown);
        showSubmitErrors(form);
        enableForm(form);
      });
  
      return false;
    });
  
    function disableForm(form) {
      $(':input[type="submit"]').attr("disabled", "disabled");
      $(form).find("fieldset").attr("disabled", "disabled");
      $(form).find("i").removeClass("hide");
    }

    function enableForm(form) {
      $(':input[type="submit"]').removeAttr("disabled");
      $(form).find("fieldset").removeAttr("disabled");
      $(form).find("i").addClass("hide");
    }

    function showSucceededMessage(form) {
      $(form).parent().find(".submit-succeeded").removeClass("hide");
      $(form).addClass("hide");
    }

    function showSubmitErrors(form) {
      $(form).find(".submit-errors").removeClass("hide");
    }

    grecaptcha.ready(function(){
      var sitekey = $("#recaptcha_token").data("sitekey");
      
      if (sitekey) {
        grecaptcha.execute(sitekey, {action: 'postcomment'}).then(function(token)
        {
          $('#recaptcha_token').val(token);
          $(':input[type="submit"]').removeClass("hide");
        });
      }
    });
  })(jQuery);
