const app = Vue.createApp({
  data() {
    return {
      url: "www.google.com",
      title: "Hello world",
      age: 45,
      showAge: true,
      x: 0,
      y: 0,
      books: [
        {
          title: "block a",
          position: "top",
          img: "assets/images/2.jpeg",
          isFav: true,
        },
        {
          title: "block b",
          position: "bottom",
          img: "assets/images/1.png",
          isFav: false,
        },
        {
          title: "block c",
          position: "left",
          img: "assets/images/1.png",
          isFav: true,
        },
        {
          title: "block d",
          position: "right",
          img: "assets/images/2.jpeg",
          isFav: true,
        },
        {
          title: "block e",
          position: "center",
          img: "assets/images/3.png",
          isFav: false,
        },
        {
          title: "block f",
          position: "center-bottom",
          img: "assets/images/1.png",
          isFav: true,
        },
        {
          title: "block g",
          position: "center-top",
          img: "assets/images/2.jpeg",
          isFav: false,
        },
        {
          title: "block h",
          position: "top-bottom",
          img: "assets/images/1.png",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    changeTitle(title) {
      //this.title = "Nigeria is my country";
      this.title = title;
      //this.age = this.age + 1;
    },
    toggleShowAge() {
      this.showAge = !this.showAge;
    },
    handleEvent(e, data) {
      console.log(e);
      if (data) {
        console.log(data);
      }
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleIsFav(book) {
      book.isFav = !book.isFav;
    },
    filterisFavBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#appClass");
