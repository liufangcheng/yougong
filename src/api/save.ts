import axiosInstance from "./api";

export const QuestionConsultation = (params: any): Promise<any> => {
  return axiosInstance.post('/questionConsultation/save', params).then(res => res.data);
};