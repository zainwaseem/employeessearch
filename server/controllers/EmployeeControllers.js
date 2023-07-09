import Employee from "../models/EmployeeModel.js";

const AddEmployee = async (req, res, next) => {
  try {
    const { id, name, photo, role } = req.body;

    const newEmployee = new Employee({
      id,
      name,
      photo,
      role,
    });
    await newEmployee.save();
    return res.json({ message: "Employee added successfully" });
  } catch (error) {
    // next(error);
    next(error);
  }
};

const getALLEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find().sort({ name: 1 });
    return res.json(employees);
  } catch (error) {
    console.log(error);
  }
};

const getEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findById(req.params.id);
    return res.json(employee);
  } catch (error) {
    console.log(error);
  }
};

const updateEmployee = async (req, res, next) => {
  const { id, name, photo, role } = req.body;
  try {
    await Employee.findByIdAndUpdate(req.params.id, {
      id,
      name,
      photo,
      role,
    });
    return res.status(200).json({ message: `Employee updated successfully` });
  } catch (error) {
    next(error);
  }
};
const deleteEmployee = async (req, res, next) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    return res.json({ message: `Employee deleted successfully` });
  } catch (error) {
    next(error);
  }
};

export {
  getALLEmployees,
  AddEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
};
