import ScrollReveal from 'scrollreveal';


//-----Scrollreveal Animation----
export const Scrollreveal = () => {
    const featureClass = document.getElementsByClassName('features-card');
    const featureHeading = document.getElementsByClassName('features-page-heading');

    ScrollReveal().reveal(featureClass, {
      delay: 200,
      distance: '50px',
      easing: 'ease',
      origin: 'bottom',
      interval: 100
    });

    ScrollReveal().reveal(featureHeading, {
      delay: 200,
      distance: '50px',
      easing: 'ease',
      origin: 'bottom',
      interval: 100
    });
}