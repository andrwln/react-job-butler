import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  div {
    width: 20%;
    padding: 5px;
  }
`;

class JobListItem extends Component {
  render() {
    const { company_name, position_title, current_status, id } = this.props.job;
    return (
      <ItemContainer>
        <div>{company_name}</div>
        <div>{position_title}</div>
        <div>{current_status}</div>
        <div>
          <Link
            href={{
              pathname: 'edit',
              query: { id }
            }}
          >
            <a>Edit</a>
          </Link>
        </div>
      </ItemContainer>
    );
  }
}

export default JobListItem;
