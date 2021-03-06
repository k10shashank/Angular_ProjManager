import { UserModel } from './../models/user.model';
import { ProjectModel } from './../models/project.model';

export function stringifyProjectModel(project: ProjectModel) {
    return `${project.ID_PROJECT} | ${project.NAME} | ${project.DETAILS} | ${project.CREATED_ON.toDateString()}`;
}

export function stringifyUserModel(user: UserModel) {
    return `${user.ID_USER} | ${user.EMAIL} | ${user.FIRST_NAME} | ${user.LAST_NAME}`;
}

export function objectifyProjectModel(projectString: string) {
    const values = projectString.split(' | ');
    const project: ProjectModel = { ID_PROJECT: parseInt(values[0], 10), NAME: values[1], DETAILS: values[2], CREATED_ON: new Date(values[3]) };
    return project;
}

export function objectifyUserModel(userString: string) {
    const values = userString.split(' | ');
    const user: UserModel = { ID_USER: parseInt(values[0], 10), EMAIL: values[1], FIRST_NAME: values[2], LAST_NAME: values[3] };
    return user;
}
