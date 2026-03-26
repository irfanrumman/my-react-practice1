export default function studentReducer(state, action) {
  switch (action.type) {
    case "changeStudentHandler": {
      return {
        ...state,
        studentName: action.payload,
      };
    }

    case "createStudent": {
      return {
        ...state,
        students: [
          ...state.students,
          {
            id: Date.now() + "",
            name: state.studentName,
            isPresant: undefined,
          },
        ],
        studentName: "",
      };
    }

    case "removeHandeler": {
      return {
        ...state,
        students: state.students.filter(
          (studentItem) => studentItem.id !== action.payload,
        ),
      };
    }
    case "editHandeler": {
      return {
        ...state,
        editMode: true,
        studentName: action.payload.name,
        editableMode: action.payload.id,
      };
    }
    case "updateStudent": {
      const updateStudent = state.students.map((studentItem) => {
        if (studentItem.id == state.editableMode) {
          return { ...studentItem, name: state.studentName };
        }
        return studentItem;
      });
      return {
        ...state,
        students: updateStudent,
        editMode: false,
        studentName: "",
      };
    }

    case "makePresentHandler": {
      const presentStudent = state.students.map((studentItem) => {
        if (studentItem.id == action.payload.id) {
          return { ...studentItem, isPresant: action.payload.isPresant };
        }
        return studentItem;
      });
      return {
        ...state,
        students: presentStudent,
      };
    }

    // case "makeAbsentHandler": {
    //   const absentStudent = state.students.map((studentItem) => {
    //     if (studentItem.id == action.payload.id) {
    //       return { ...studentItem, isPresant: action.payload.isPresant };
    //     }
    //     return studentItem;
    //   });
    //   return {
    //     ...state,
    //     students: absentStudent,
    //   };
    // }
    case "toggoleList": {
      const toggole = state.students.map((studentItem) => {
        if (studentItem.id == action.payload) {
          return { ...studentItem, isPresant: !studentItem.isPresant };
        }
        return studentItem;
      });

      return {
        ...state,
        students: toggole,
      };
    }

    default: {
      return state;
    }
  }
}
