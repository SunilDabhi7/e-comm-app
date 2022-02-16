// export const shop_db = {
//   product_category: [
//     { name: "Mobile", id: 1, desc: "" },
//     { name: "Laptop", id: 2, desc: "" },
//     { name: "Audio", id: 3, desc: "" },
//     { name: "Tablet", id: 4, desc: "" },
//     { name: "Camera", id: 5, desc: "" },
//     { name: "Smartwatch", id: 6, desc: "" },
//     { name: "TV", id: 7, desc: "" },
//   ],
// };

export const products = {
  mobiles: [
    {
      title: {
        brand: "Motorola",
        model: "Motorola G40 Fusion",
        color: "Frosted Champagne",
      },
      id: 101,
      price: 15000,
      deliveryType: "Free delivery",
      seller: "xyz electronics",
      qty: 1,
      features: {
        memory: ["6GB RAM", "128GB ROM"],
        display: "17.22 cm (6.78 inch) Full HD Display",
        camera: {
          back: "64MP + 8MP + 2MP",
          front: "16MP Front",
        },
        battery: "6000 mAh Battery",
        processor: "Qualcomm Snapdragon 732G Processor",
      },
      poster:
        "https://rukminim1.flixcart.com/image/416/416/knoxnrk0/mobile/s/d/d/g40-fusion-panv0002in-panv0006in-panv0010in-motorola-original-imag2aqcxrhhuwfh.jpeg?q=70",
    },
    {
      title: {
        brand: "Samsung",
        model: "Samsung Galaxy F12",
        color: "Sky Blue",
      },
      id: 102,
      price: 12000,
      deliveryType: "Free delivery",
      seller: "xyz electronics",
      features: {
        memory: ["4GB RAM", "64GB ROM"],
        display: "16.55 cm (6.51 inch) HD+ Display",
        camera: {
          back: "48MP + 5MP + 2MP + 2MP",
          front: "8MP Front",
        },
        battery: "6000 mAh Battery",
        processor: "Exynos 850 Processor",
      },
      poster:
        "https://rukminim1.flixcart.com/image/416/416/kn22m4w0/mobile/9/k/s/galaxy-f12-sm-f127glbiins-samsung-original-imagftmhhhvghq7w.jpeg?q=70",
    },
    {
      title: {
        brand: "Poco",
        model: "Poco M3",
        color: "Yellow",
      },
      id: 103,
      price: 11000,
      deliveryType: "Free delivery",
      seller: "xyz electronics",
      features: {
        memory: ["6GB RAM", "64GB ROM"],
        display: "16.55 cm (6.51 inch) HD+ Display",
        camera: {
          back: "48MP + 2MP + 2MP",
          front: "8MP Front",
        },
        battery: "6000 mAh Battery",
        processor: "Qualcomm Snapdragon 662 Processor",
      },
      poster:
        "https://rukminim1.flixcart.com/image/416/416/kklhbbk0/mobile/h/i/q/m3-mzb087ain-poco-original-imafzxf8zqkcgwfv.jpeg?q=70",
    },
    {
      title: {
        brand: "Poco",
        model: "Poco X3 Pro",
        color: "Steel Blue",
      },
      id: 104,
      price: 21000,
      deliveryType: "Free delivery",
      seller: "xyz electronics",
      features: {
        memory: ["8GB RAM", "128GB ROM"],
        display: "16.94 cm (6.67 inch) Full HD+ Display",
        camera: {
          back: "48MP + 8MP + 2MP + 2MP",
          front: "20MP Front",
        },
        battery: "5160 mAh Battery",
        processor: "Qualcomm Snapdragon 860 Processor",
      },
      poster:
        "https://rukminim1.flixcart.com/image/416/416/kr9jafk0/mobile/m/m/y/x3-pro-mzb08t9in-poco-original-imag52znesm3hemf.jpeg?q=70",
    },
    {
      title: {
        brand: "Realme",
        model: "Realme Narzo 30",
        color: "Racing Blue",
      },
      id: 105,
      price: 14000,
      deliveryType: "Free delivery",
      seller: "xyz electronics",
      features: {
        memory: ["4GB RAM", "64GB ROM"],
        display: "16.51 cm (6.5 inch) Full HD+ Display",
        camera: {
          back: "48MP + 2MP + 2MP",
          front: "16MP Front",
        },
        battery: "5000 mAh Battery",
        processor: "MediaTek Helio G95 Processor",
      },
      poster:
        "https://rukminim1.flixcart.com/image/416/416/kq18n0w0/mobile/y/2/b/narzo-30-rmx2156-realme-original-imag45yhzhugdcqh.jpeg?q=70",
    },
    {
      title: {
        brand: "Samsung",
        model: "Samsung Galaxy F22",
        color: "Denim Blue",
      },
      id: 106,
      price: 15000,
      deliveryType: "Free delivery",
      seller: "xyz electronics",
      features: {
        memory: ["6GB RAM", "128GB ROM"],
        display: "16.26 cm (6.4 inch) HD+ Display",
        camera: {
          back: "48MP + 8MP + 2MP + 2MP",
          front: "13MP Front",
        },
        battery: "6000 mAh Battery",
        processor: "MediaTek Helio G80 Processor",
      },
      poster:
        "https://rukminim1.flixcart.com/image/416/416/kqqykcw0/mobile/j/5/7/galaxy-f22-sm-e225flbdins-samsung-original-imag4z99fp4qdfby.jpeg?q=70",
    },
    {
      title: {
        brand: "Realme",
        model: "Realme Narzo 50a",
        color: "Oxygen Green",
      },
      id: 107,
      price: 13000,
      deliveryType: "Free delivery",
      seller: "xyz electronics",
      features: {
        memory: ["4GB RAM", "128GB ROM"],
        display: "16.51 cm (6.5 inch) HD+ Display",
        camera: {
          back: "50MP + 2MP + 2MP",
          front: "8MP Front",
        },
        battery: "6000 mAh Battery",
        processor: "MediaTek Helio G85 Processor",
      },
      poster:
        "https://rukminim1.flixcart.com/image/416/416/ktx9si80/mobile/q/a/c/narzo-50a-rmx3430-realme-original-imag75kybaer8scz.jpeg?q=70",
    },
    {
      title: {
        brand: "Realme",
        model: "Realme C25Y",
        color: "Glacier Blue",
      },
      id: 108,
      price: 11000,
      deliveryType: "Free delivery",
      seller: "xyz electronics",
      features: {
        memory: ["4GB RAM", "64GB ROM"],
        display: "16.51 cm (6.5 inch) HD+ Display",
        camera: {
          back: "50MP + 2MP + 2MP",
          front: "8MP Front",
        },
        battery: "5000 mAh Battery",
        processor: "Unisoc T610 Octa Core Processor",
      },
      poster:
        "https://rukminim1.flixcart.com/image/416/416/ktlu9ow0/mobile/p/c/u/c25y-rmx3265-realme-original-imag6wmjczbfhk4w.jpeg?q=70",
    },
  ],
};
