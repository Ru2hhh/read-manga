



window.onload = function(){
	const target = document.querySelector('.chapter_list')
	const chapter_id = target.options[target.selectedIndex].dataset.id; 
	create_img(chapter_id)
}
function change_chapter(target) {
   const chapter_id = target.options[target.selectedIndex].dataset.id; 
   const Title = document.querySelector('.chap_content h1')
   Title.textContent = `A Pervert’s Daily Life - Chapter ${chapter_id}`
   localStorage.setItem('Chapnow', chapter_id)
   create_img(chapter_id)
};

function create_img(chapter) {
	const chapter_content = document.querySelector('.chap_content h1')
	const img = document.createElement('div')
	img.className = 'manga_img'
	img.innerHTML = `
				<img src="/assets/Chapter_${chapter}/001.jpg" alt="" class="img">
				<img src="/assets/Chapter_${chapter}/002.jpg" alt="" class="img">
				<img src="/assets/Chapter_${chapter}/003.jpg" alt="" class="img">
				<img src="/assets/Chapter_${chapter}/004.jpg" alt="" class="img">
				<img src="/assets/Chapter_${chapter}/005.jpg" alt="" class="img">
				<img src="/assets/Chapter_${chapter}/006.jpg" alt="" class="img">
				<img src="/assets/Chapter_${chapter}/007.jpg" alt="" class="img">
				<img src="/assets/Chapter_${chapter}/008.jpg" alt="" class="img">
				<img src="/assets/Chapter_${chapter}/009.jpg" alt="" class="img">
				<img src="/assets/Chapter_${chapter}/010.jpg" alt="" class="img">
				<img src="/assets/Chapter_${chapter}/011.jpg" alt="" class="img">
				<img src="/assets/Chapter_${chapter}/012.jpg" alt="" class="img">
				<img src="/assets/Chapter_${chapter}/013.jpg" alt="" class="img">
				<img src="/assets/Chapter_${chapter}/014.jpg" alt="" class="img">
				<img src="/assets/Chapter_${chapter}/015.jpg" alt="" class="img">
				<img src="/assets/Chapter_${chapter}/016.jpg" alt="" class="img">
				<img src="/assets/Chapter_${chapter}/017.jpg" alt="" class="img">
				<img src="/assets/Chapter_${chapter}/018.jpg" alt="" class="img">
				<img src="/assets/Chapter_${chapter}/019.jpg" alt="" class="img">
				<img src="/assets/Chapter_${chapter}/020.jpg" alt="" class="img">
				<img src="/assets/Chapter_${chapter}/021.jpg" alt="" class="img">
				<img src="/assets/Chapter_${chapter}/022.jpg" alt="" class="img">
				<img src="/assets/Chapter_${chapter}/023.jpg" alt="" class="img">
				<img src="/assets/Chapter_${chapter}/024.jpg" alt="" class="img">
	`
	chapter_content.appendChild(img)
}

