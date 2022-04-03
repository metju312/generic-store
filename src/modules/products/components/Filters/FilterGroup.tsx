import React from 'react';

type Props = {
  title: string
};

const FilterGroup = ({ title }: Props) => {
  return (
    <div>
      {title}
    </div>
  );
};

export default FilterGroup;
