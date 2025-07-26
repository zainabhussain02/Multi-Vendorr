// import axios from "axios";
// import { server } from "../../server";

// // create event
// export const createevent = (data) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "eventCreateRequest",
//     });

//     const { d } = await axios.post(`${server}/event/create-event`, data);
//     dispatch({
//       type: "eventCreateSuccess",
//       payload: d.event,
//     });
//   } catch (error) {
//     dispatch({
//       type: "eventCreateFail",
//       payload: error.response.data.message,
//     });
//   }
// };

// // get all events of a shop
// export const getAllEventsShop = (id) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "getAlleventsShopRequest",
//     });

//     const { data } = await axios.get(`${server}/event/get-all-events/${id}`);
//     dispatch({
//       type: "getAlleventsShopSuccess",
//       payload: data.events,
//     });
//   } catch (error) {
//     dispatch({
//       type: "getAlleventsShopFailed",
//       payload: error.response.data.message,
//     });
//   }
// };

// // delete event of a shop
// export const deleteEvent = (id) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "deleteeventRequest",
//     });

//     const { data } = await axios.delete(
//       `${server}/event/delete-shop-event/${id}`,
//       {
//         withCredentials: true,
//       }
//     );

//     dispatch({
//       type: "deleteeventSuccess",
//       payload: data.message,
//     });
//   } catch (error) {
//     dispatch({
//       type: "deleteeventFailed",
//       payload: error.response.data.message,
//     });
//   }
// };

// // get all events
// export const getAllEvents = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: "getAlleventsRequest",
//     });

//     const { data } = await axios.get(`${server}/event/get-all-events`);
//     dispatch({
//       type: "getAlleventsSuccess",
//       payload: data.events,
//     });
//   } catch (error) {
//     dispatch({
//       type: "getAlleventsFailed",
//       payload: error.response.data.message,
//     });
//   }
// };

import axios from "axios";
import { server } from "../../server";

// Create event 
export const createevent = (newForm) => async (dispatch) => {
  try {
    dispatch({ type: "eventCreateRequest" });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      // `/api/v2/event/create-event`,
      `${server}/event/create-event`,
      newForm,
      config
    );

    dispatch({
      type: "eventCreateSuccess",
      payload: data.event,
    });
  } catch (error) {
    dispatch({
      type: "eventCreateFail",
      payload: error.response.data.message,
    });
  }
};


// get all event of a shop
export const getAllEventsShop = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getAlleventsShopRequest" });

    const { data } = await axios.get(
      `${server}/event/get-all-events/${id}`);
      //  console.log("Fetched Products Data:", data.products);
         

    dispatch({
      type: "getAlleventsShopSuccess",
      payload: data.events,
    });
  } catch (error) {
    dispatch({
      type: "getAlleventsShopFailed",
      payload: error.response.data.message,
    });
  }
};

// // Delete event
export const deleteEvent = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteeventRequest" });

    const { data } = await axios.delete(
      `${server}/event/delete-shop-event/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deleteeventSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteeventFailed",
      payload: error.response.data.message,
    });
  }
};



