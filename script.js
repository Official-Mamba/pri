


alert("Click On Sreen");


// Twinkle overlay: creates stars across the full screen
(function(){
	const maxStars = 40;
	function rand(min, max){ return Math.random() * (max - min) + min; }

	document.addEventListener('DOMContentLoaded', () => {
		const container = document.createElement('div');
		container.className = 'twinkles';
		document.body.appendChild(container);

		for(let i=0;i<maxStars;i++){
			const star = document.createElement('div');
			star.className = 'star';
			const size = Math.floor(rand(4, 14));
			star.style.width = size + 'px';
			star.style.height = size + 'px';
			star.style.left = rand(0, 100) + '%';
			star.style.top = rand(0, 100) + '%';
			star.style.animationDuration = rand(2,6) + 's';
			star.style.animationDelay = rand(0,8) + 's';
			container.appendChild(star);
		}
	});
})();

