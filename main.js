$(function () {
  // FORMATTERS
  function formatLinks(content) {
    var urlRegex = /(https?:\/\/[^\s<]+)/g;
    return content.replace(urlRegex, function (url) {
        return '<a href="' + url + '">' + url + '</a>';
    });
  }

  function formatBold(content) {
    var boldRegex = /\*\s*([^*]*?)\s*\*/g;
    return content.replace(boldRegex, function (text) {
        return '<strong>' + text + '</strong>';
    }).replace(/[*]/g, '');
  }

  function formatItalics(content) {
    var itRegex = /\_\s*([^*=_]*?)\s*\_/g;
    return content.replace(itRegex, function (text) {
        return '<em>' + text + '</em>';
    }).replace(/[_]/g, '');
  }

  function formatHighlight(content) {
    var hlightRegex = /(![^\n|\r\n|\r<]+)/g;
    return content.replace(hlightRegex, function (text) {
      return '<span class="highlight">' + text + '</span>';
    }).replace(/[!]/g, '');
  }

  function formatDimmed(content) {
    var dimmedRegex = /(--[^\n|\r\n|\r<]+)/g;
    return content.replace(dimmedRegex, function (text) {
      return '<span class="dimmed">' + text + '</span>';
    }).replace(/[--]/g, '');
  }

  function formatAll(content, destination){
    var tempContent = content;
    tempContent = formatLinks(tempContent);
    tempContent = formatBold(tempContent);
    tempContent = formatItalics(tempContent);
    tempContent = formatHighlight(tempContent);
    tempContent = formatDimmed(tempContent);
    $(destination).html(tempContent);
  }

  // SAVE/EDIT/GET
  function save(name, origin) {
    localStorage.setItem(name, origin);
    formatAll($('.text').html(), '.text');
    $('body').removeClass('editing');
    $('.text').attr('contentEditable', 'false');
  }

  function edit(name, destination){
    $(destination).html(localStorage.getItem(name));
    $('body').addClass('editing');
    $('.text').attr('contentEditable', 'true').focus();
  }

  function get(name, destination){
    $(destination).html(localStorage.getItem(name));
    formatAll($('.text').html(), '.text');
    $('body').removeClass('editing');
    $('.text').attr('contentEditable', 'false');
  }

  // ACTION BUTTONS
  $('.edit').click(function () {
    edit('avNotepadText', '.text');
  });

  $('.save').click(function () {
    save('avNotepadText', $('.text').html());
  });

  $('.cancel').click(function () {
    get('avNotepadText', '.text');
  });

  $('.clear').click(function () {
    if(window.confirm('This will clear all text in the notepad')){
      $('.text').html('');
    }
  });

  // KEYBOARD
  $(document).keydown(function (e) {
    //esc key cancels editing
    if (e.keyCode == 27 && $('body').hasClass('editing')) {
      get('avNotepadText', '.text');
    }
    //ctrl+s saves
    if (e.ctrlKey && (e.which == 83) && $('body').hasClass('editing')) {
      save('avNotepadText', $('.text').html());
    }

    //ctrl+e edits
    if (e.ctrlKey && (e.which == 69) && $('body').not('.editing')) {
      edit('avNotepadText', '.text');
    }
  });

  // GET SAVED CONTENT ON LOAD
  get('avNotepadText', '.text');
});