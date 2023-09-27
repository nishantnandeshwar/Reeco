import { createSlice } from "@reduxjs/toolkit";

// Define your initial state here
export const initialState = {
    dataValue: [
        {
          id: 0,
          img: require("../assets/image/AvocadoHass.jpg"),
          productName:
            "Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid",
          branch: "Hormel Black Labelmany",
          price: "60.56",
          quantity: "0",
          total: "0",
          status: "",
        },
        {
          id: 1,
          img: require("../assets/image/AvocadoHass.jpg"),
          productName:
            "Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid",
          branch: "Hormel Black Labelmany",
          price: "60.56",
          quantity: "1",
          total: "60.56",
          status: "",
        },
        {
            id: 2,
            img: require("../assets/image/AvocadoHass.jpg"),
            productName:
              "Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid",
            branch: "Hormel Black Labelmany",
            price: "60.56",
            quantity: "0",
            total: "0",
            status: "Approved",
          },
          {
            id: 3,
            img: require("../assets/image/AvocadoHass.jpg"),
            productName:
              "Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid",
            branch: "Hormel Black Labelmany",
            price: "60.56",
            quantity: "0",
            total: "0",
            status: "Missing",
          },
      ],
  };
const counterSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    food: (state, action) => {
        state.dataValue = action.payload;
    },
  },
});

export const { food } = counterSlice.actions;
export default counterSlice.reducer;
