import React, { useState, useEffect } from 'react';
import { FiEdit, FiTrash2, FiUsers } from 'react-icons/fi';
import { Container, Table, TextId, TextName, Buttons } from './styles';
import filterListByText from '../../../utils/filterListByText';
import Input from '../../../components/Input';
import Title from '../../../components/Title';
import ButtonActions from '../../../components/ButtonActions';

const content = [
  {
    reagent: 'Acetona',
    code: '1AH231L',
    type: 'Controlado',
  },
  {
    reagent: 'Ácido Fosfórico',
    code: 'A15S3P0',
    type: 'Controlado',
  },
];

const ListaReagentesCadastrados: React.FC = () => {
  const [list, setList] = useState<any[]>([]);
  const [filterList, setFilterList] = useState<any[]>([]);
  const [call, setCall] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function loadList(): void {
      setList(content);
      setFilterList(content);
    }
    if (list.length === 0 && !call) {
      loadList();
      setCall(true);
    }

    // if (list.length === 0 && !call) {
    //   setLoading(true);
    //   api
    //     .post('/users/login', {
    //       email: 'admin@academico.ufs.br',
    //       password: 'admin',
    //     })
    //     .then(response => {
    //       api.defaults.headers.common['x-access-token'] =
    //         response.data.accessToken;
    //       api.get(`/users/list/pending`).then(listPending => {
    //         setList(listPending.data);
    //         setLoading(false);
    //         setCall(true);
    //       });
    //     });
    // }
  }, [call, list.length]);

  const deleteByCode = (code: string, reagent: string): void => {
    const result = confirm(`Deseja realmente excluir o reagente ${reagent}?`);
    if (result) {
      // try {
      //   api.put(`/users/approve/${id}`).then(response => {
      //     console.log(response);
      //     if (response.status > 300)
      //       alert('Não foi possível realizar a operação.');
      //   });
      // } catch (err) {
      //   alert(err);
      // }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value === '') setFilterList(list);
    else
      setFilterList(
        filterListByText({
          list,
          fieldsToSearch: ['reagent', 'code', 'type'],
          filter: e.target.value,
        }),
      );
  };

  return (
    <>
      <Title>Reagentes Licenciados</Title>
      <input
        type="text"
        onChange={e => {
          handleChange(e);
        }}
      />
      <Container>
        <Table>
          {filterList.map(item => (
            <tr>
              <TextId>{item.code}</TextId>
              <TextName>{item.reagent}</TextName>
              <Buttons>
                <div>
                  <ButtonActions
                    icon={FiEdit}
                    to={`/editar_reagente/${item.code}`}
                  />
                  <ButtonActions
                    color="#081a51"
                    icon={FiTrash2}
                    onClick={() => {
                      deleteByCode(item.code, item.reagent);
                    }}
                  />
                </div>
              </Buttons>
            </tr>
          ))}
        </Table>
      </Container>
    </>
  );
};
export default ListaReagentesCadastrados;