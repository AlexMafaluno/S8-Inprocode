export const API_ROOT= 'http://localhost:3000';

export const API_ENDPOINTS = {
  
    SCAPEROOM:{
        BASE: `${API_ROOT}/api/scaperoom/`,
    },
    LOCATION: {
        BASE: `${API_ROOT}/location/`,
        SAVE: `${API_ROOT}/location/save-location`,
        BY_GENRE: `${API_ROOT}/location?genre=`
    },
    EVENT: {
        BASE: `${API_ROOT}/event/`,
        SAVE: `${API_ROOT}/event/save-Event`,
    },
    PHOTO: {
        BASE: `${API_ROOT}/photo/`,
        USER: `${API_ROOT}/photo/photos/user/`,
        UPLOAD: `${API_ROOT}/photo/upload-photo`,
    },


    // Dinámicas
  getScaperoomById: (id: number) => `${API_ENDPOINTS.SCAPEROOM.BASE}${id}`,
  deleteScaperoomById: (id: number) => `${API_ENDPOINTS.SCAPEROOM.BASE}${id}`,
  updateScaperoomById: (id: number) => `${API_ENDPOINTS.SCAPEROOM.BASE}${id}`,
  getPhotoByUserId: (userId: string) => `${API_ROOT}/api/photos/user/${userId}`,
  deleteEventById: (id: number) => `${API_ENDPOINTS.EVENT.BASE}${id}`,
  getPhotosByUser: (id: number) => `${API_ENDPOINTS.PHOTO.USER}${id}`,
}
