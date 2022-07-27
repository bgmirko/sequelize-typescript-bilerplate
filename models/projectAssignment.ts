'use strict';
import {
    Model
} from 'sequelize';

interface ProjectAssignmentsAttributes {
    projectId: number;
    userId: number;
}
module.exports = (sequelize: any, DataTypes: any) => {
    class ProjectAssignments extends Model<ProjectAssignmentsAttributes> implements ProjectAssignmentsAttributes {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        projectId: number;
        userId: number;
        static associate(models: any) {
            // define association here
        }
    }
    ProjectAssignments.init({
        projectId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Projects',
                key: 'id'
            }
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Users',
                key: 'id',
            }
        },
    }, {
        sequelize,
        modelName: 'ProjectAssignment',
    });
    return ProjectAssignments;
};