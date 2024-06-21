
const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
		entry.target.classList.add('t1_box_s-animation');
	  }
	  if (entry.isIntersecting) {
		entry.target.classList.add('t2_box_s-animation');
	  }
	});
  });
  observer.observe(document.querySelector('.t1_box_s'));
  observer.observe(document.querySelector('.t2_box_s'));

  const observerer= new IntersectionObserver(entries => {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
		entry.target.classList.add('t3_box_s-animation');
	  }
	});
  });
  observerer.observe(document.querySelector('.t3_box_s'));


  $(document).ready(function() {
	if(!localStorage.getItem('language')){
		$('#language-popup').show();
	}
	$('.logo').click(function(){
		$('#language-popup').show();
	})
	function changeLanguage(lang){
		if(lang === 'ua'){
			$('.text-ua').show();
			$('.text-en').hide();
		}
		else{
			$('.text-ua').hide();
			$('.text-en').show();
		}
	}
	$('#language-popup .language-button').on('click', function(){
		let lang = $(this).data('lang');
		changeLanguage(lang);
		$('#language-popup').hide();
		localStorage.setItem('language', lang);
	});
	$('.language-button').on('click', function(){
		let lang = $(this).data('lang');
		changeLanguage(lang);
		localStorage.setItem('language', lang);
	});

	let savedLang = localStorage.getItem('language');
	if(savedLang){
		changeLanguage(savedLang);
	}
  })