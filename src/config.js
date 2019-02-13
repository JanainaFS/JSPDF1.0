CKEDITOR.config = function (config) {
    // ... other configuration ...
  
    config.toolbarGroups = [
		{ name: 'document',	   groups: [ 'doctools' ] },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'align' ] },
		{ name: 'styles' }
	];
    config.removeButtons = 'Print,Templates,Save,Strike,Styles,Format';
    config.removeDialogTabs = 'link:advanced';
}