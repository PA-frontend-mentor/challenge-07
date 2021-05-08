fetch("info.json")
  .then((response) => response.json())
  .then((data) => {
    main(data);
  });

const main = ({ data }) => {
  console.log(data);
};
