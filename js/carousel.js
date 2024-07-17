  // creating carousel
  
  const config = {
    type: 'carousel',
    perView: 3,
    breakpoint: {
      800: {
        perView: 2
      }
    }
  }

  new Glide('.glide').mount()