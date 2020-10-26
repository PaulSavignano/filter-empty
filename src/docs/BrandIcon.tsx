import React from 'react';
import FilterIcon from '@material-ui/icons/FilterList';

function BrandIcon({ className }: { className: string }): React.ReactElement {
  return <FilterIcon className={className} />;
}

export default BrandIcon;
