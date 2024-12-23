
 AOS.init();


  // Navigation arrows close-sustainable
  document.addEventListener('DOMContentLoaded', function () {
  const closeBtn = document.getElementById('close-sustainable');
  const sustainableCont = document.querySelector('.sustainable-cont');

  closeBtn.addEventListener('click', function () {
    sustainableCont.style.display = 'none';
  });
});

//date play====

document.addEventListener('DOMContentLoaded', function () {
  const playButton = document.getElementById('play-button');
  const videoOverlay = document.querySelector('.video-overlay');
  const jarallaxElement = document.querySelector('.jarallax');

  playButton.addEventListener('click', function () {
    // Remove overlay and play video
    videoOverlay.style.display = 'none';
    playButton.style.display = 'none';

    // Access the iframe and play the video with sound
    const iframe = jarallaxElement.querySelector('iframe');
    if (iframe) {
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"unMute","args":""}', '*'
      );
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}', '*'
      );

    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const playButton = document.getElementById('play-button');
  const videoOverlay = document.querySelector('.video-overlay');
  const jarallaxElement = document.querySelector('.jarallax');
  let iframe;

  // Wait for the iframe to be ready
  function onYouTubeIframeAPIReady() {
    iframe = jarallaxElement.querySelector('iframe');
    if (iframe) {
      iframe.contentWindow.postMessage(
        '{"event":"listening","id":"video"}',
        '*'
      );
    }
  }

  // Handle play button click
  playButton.addEventListener('click', function () {
    videoOverlay.style.display = 'none';
    playButton.style.display = 'none';

    if (iframe) {
            iframe.contentWindow.postMessage(
        '{"event":"command","func":"unMute","args":""}', '*'
      );
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}', '*'
      );
    }
  });

  // Listen for video state changes
  window.addEventListener('message', function (event) {
    const data = JSON.parse(event.data || '{}');

    if (data.event === 'onStateChange') {
      // Video ended (state 0)
      if (data.info === 0) {
        videoOverlay.style.display = 'block';
        playButton.style.display = 'block';

        iframe.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}', '*'
        );
      }
    }
  });

  // Initialize API Ready
  onYouTubeIframeAPIReady();
});

const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

