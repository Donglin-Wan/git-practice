const axios = require('axios');

const getProductsLising = async (req, res) => {
  try {
    const config = {
      headers: {
        'Api-key': '4NKQ3-815C2-8T5Q2-16318-55301',
      },
    };
    const tokenRes = await axios.post(
      'https://devcore02.cimet.io/v1/generate-token',
      null,
      config
    );

    const token = tokenRes.data.data.token;
    const productsRequestConfig = {
      headers: {
        'Api-key': '4NKQ3-815C2-8T5Q2-16318-55301',
        'Auth-token': token,
      },
    };

    const requestBody = {
      session_id:
        'eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9',
    };
    const data = await axios.post(
      'https://devcore02.cimet.io/v1/plan-list',
      requestBody,
      productsRequestConfig
    );
    return res.json(data.data.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getProductsLising,
};
