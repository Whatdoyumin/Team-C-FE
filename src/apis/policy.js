import axios from 'axios';

const getSinglePolicy = async (policyId) => {
  const { data } = await axios.get(
    `http://3.36.196.11:8080/policy/recommend/${policyId}`
  );
  return data;
};

const getRandomPolicyLogin = async (page, interest) => {
  const { data } = await axios.get(
    `http://3.36.196.11:8080/policy/recommend/random?bizTycdSel=${interest}&display=10&pageIndex=${page}`
  );
  return data;
};
const getRandomPolicy = async (page) => {
  const { data } = await axios.get(
    `http://3.36.196.11:8080/policy/recommend/random?display=10&pageIndex=${page}`
  );
  return data;
};

export { getSinglePolicy, getRandomPolicy, getRandomPolicyLogin };
