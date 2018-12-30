// Static comments
// from: https://github.com/eduardoboucas/popcorn/blob/gh-pages/js/main.js
(function ($) {
    $('.staticman-comments').find('a.reply').click(function(){
      var commentId = this.id;
      $('[name="fields[replyTo]"]').val(commentId);
    });

    $(':input[type="submit"]').css('visibility', 'hidden');

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
      $(form).find("fieldset").attr("disabled", "disabled");
      $(form).find("i").removeClass("hide");
    }

    function enableForm(form) {
      $(form).find("fieldset").removeAttr("disabled");
      $(form).find("i").addClass("hide");
    }

    function showSucceededMessage(form) {
      $(form).parent().find("submit-succeeded").removeClass("hide");
      $(form).addClass("hide");
    }

    function showSubmitErrors(form) {
      $(form).find(".submit-errors").removeClass("hide");
    }

    grecaptcha.ready(function(){
      var sitekey = $("#recaptcha_token").data("sitekey");

      grecaptcha.execute(sitekey, {action: 'postcomment'}).then(function(token)
      {
        recaptcha_token.value = token;
        $(':input[type="submit"]').css('visibility', 'visible');
      });
    });
  })(jQuery);