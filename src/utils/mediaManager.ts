// src/utils/mediaManager.js
const IMAGE_AVAILABLE_SIZES = {
  ['120x90']: { w: 120, h: 90 },
  ['160x120']: { w: 160, h: 120 },
  ['240x180']: { w: 240, h: 180 },
  ['580x435']: { w: 580, h: 435 },
  ['800x600']: { w: 800, h: 600 },
  ['1920x1080']: { w: 1920, h: 1080 },
};

const IMAGE_DEFAULT_THUMBNAIL_SIZE = '580x435';
const IMAGE_DEFAULT_BIG_SIZE = '1920x1080';

const isSizeAvailable = (size) => !!IMAGE_AVAILABLE_SIZES[size];

const isImage = ({ media }) => media && media.indexOf('imgur') > -1;

const get = ({ media = null, size = null }) => {
  size = size && isSizeAvailable(size) ? size : null;
  if (!isImage({ media })) return null;
  return media.replace('{0}', size);
};

const getThumb = ({ media = null }) => {
  return get({ media, size: IMAGE_DEFAULT_THUMBNAIL_SIZE });
};

const getBig = ({ media = null }) => {
  return get({ media, size: IMAGE_DEFAULT_BIG_SIZE });
};

const mediaManager = {
  get,
  getThumb,
  getBig,
};

export default mediaManager;
