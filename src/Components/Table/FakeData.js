
export default function createData(name, email, number, status) {
    return {
        name,
        email,
        number,
        status
    };
}

export const rows = [
    createData("Cupcake", "x@abc.com", "+880123899234", "banned"),
    createData("Donut", "x@abc.com", "+880123899234", "active"),
    createData("Eclair", "x@abc.com", "+880123899234", "active"),
    createData("Frozen yoghurt", "x@abc.com", "+880123899234", "banned"),
    createData("Gingerbread", "x@abc.com", "+880123899234", "active"),
    createData("Honeycomb", "x@abc.com", "+880123899234", "active"),
    createData("Ice cream sandwich", "x@abc.com", "+880123899234", "active"),
    createData("Jelly Bean", "x@abc.com", "+880123899234", "active"),
    createData("KitKat", "x@abc.com", "+880123899234", "banned"),
    createData("Lollipop", "x@abc.com", "+880123899234", "active"),
    createData("Marshmallow", "x@abc.com", "+880123899234", "active"),
    createData("Nougat", "x@abc.com", "+880123899234", "active"),
    createData("Oreo", "x@abc.com", "+880123899234", "active")
];

export const headCells = [
    {
        id: "name",
        label: "Name"
    },
    {
        id: "email",
        label: "Email"
    },
    {
        id: "number",
        label: "Number"
    },
    {
        id: "status",
        label: "Status"
    }
];
