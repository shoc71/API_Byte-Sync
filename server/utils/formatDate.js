const formatDate = (timestamp) => {
    return new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
    }).format(new Date(timestamp));
};

export default formatDate;
