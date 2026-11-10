import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import { jwtDecode } from "jwt-decode";

export const user_register = createAsyncThunk(
  "auth/user_register",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      console.log("info ===> ", info);

      const { data } = await api.post("/user-register", info, {
        withCredentials: true,
      });
      localStorage.setItem("customerToken", data.token);

      console.log("data ==> ", data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const user_login = createAsyncThunk(
  "auth/user_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      console.log("info ===> ", info);

      const { data } = await api.post("/user-login", info, {
        withCredentials: true,
      });
      localStorage.setItem("customerToken", data.token);

      console.log("data ==> ", data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const get_user_info = createAsyncThunk(
  "auth/get_user_info",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get("/get-user", {
        withCredentials: true,
      });
      // console.log("login Data ===> ", data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const deCodeToken = (token) => {
  try {
    if (token) {
      const userData = jwtDecode(token);
      return userData;
    } else {
      return "";
    }
  } catch {
    localStorage.removeItem("customerToken");
    return;
  }
};

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    token: localStorage.getItem("customerToken"),
    userInfo: deCodeToken(localStorage.getItem("customerToken")),
    // token: localStorage.getItem("accessToken"),
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(user_register.pending, (state) => {
        state.loader = true;
      })
      .addCase(user_register.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
        state.userInfo = payload.user;
        state.token = payload.token;
        console.log(payload);
      })
      .addCase(user_register.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
        console.log(payload);
      })

      .addCase(user_login.pending, (state) => {
        state.loader = true;
      })
      .addCase(user_login.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
        state.token = payload.token;
        console.log(payload);
      })
      .addCase(user_login.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
        console.log(payload);
      })

      .addCase(get_user_info.pending, (state) => {
        state.loader = true;
      })
      .addCase(get_user_info.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.userInfo = payload.userInfo;
        console.log(payload);
      })
      .addCase(get_user_info.rejected, (state, { payload }) => {
        state.loader = false;
        console.log(payload);
      });
  },
});

export const { messageClear } = authReducer.actions;
export default authReducer.reducer;
