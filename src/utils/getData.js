import _ from 'lodash';
import data from '../data/mockData.json';

export const getAllItems = async () => {
  setTimeout(() => JSON.parse(data), 1000);
};

export const getRandomItem = () => {
  const item = _.sample(data);
  return {
    ...item,
    quantity: _.random(1, 50),
  };
};
