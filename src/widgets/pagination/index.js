import  React from 'react';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table'; 
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import PAGINATION from '@lugia/lugia-web/dist/pagination/lugia.pagination.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BasicDemo =  require('./BasicDemo').default;  const MoreTotalDemo =  require('./MoreTotalDemo').default;  const SizeChangeDemo =  require('./SizeChangeDemo').default;  const JumperDemo =  require('./JumperDemo').default;  const SimpleDemo =  require('./SimpleDemo').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
      export default PageNavHoC(widgetrouter, class ComDemo extends React.Component {
            render(){
                const {next, prev} = this.props;
                return(
                    <Row>
                        <Col span={20}>
                          <div style={{paddingRight: '50px'}}>
                              <Title title={'分页'} subTitle={'Pagination'} desc={'分页组件，分页展示数据。'} />
                              <Demo title={'基本用法'} titleID={'pagination-0'} code={<code>{ `import React from \'react\';
                              <EditTables dataSource={PAGINATION} />
                              <FooterNav prev={prev} next={next} />
                            </div>
                        </Col>
                        <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'基本用法'} href={'#pagination-0'} /><Link title={'更多分页'} href={'#pagination-1'} /><Link title={'改变每页条数'} href={'#pagination-2'} /><Link title={'快速跳转'} href={'#pagination-3'} /><Link title={'简洁分页'} href={'#pagination-4'} />
                            </Anchor>
                        </Col>
                    </Row>
                )
            }
         });   
        