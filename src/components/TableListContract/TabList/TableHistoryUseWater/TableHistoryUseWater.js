import { Col, Row, Table } from "antd";
import { dataHistoryUseWater } from "../../../../utils/dataContract";

function TableHistoryUseWater() {
  const cols = [
    {
      key: "sign",
      title: "Ký",
      dataIndex: "sign",
    },
    {
      key: "lsd",
      title: "LSD",
      dataIndex: "lsd",
    },
    {
      key: "m3_min",
      title: "m3 tối thiểu",
      dataIndex: "m3_min",
    },
    {
      key: "old_index",
      title: "CS cũ",
      dataIndex: "old_index",
    },
    {
      key: "new_index",
      title: "CS mới",
      dataIndex: "new_index",
    },
    {
      key: "m3_k",
      title: "m3 K.trừ",
      dataIndex: "m3_k",
    },
    {
      key: "m3_t",
      title: "m3 T.thu",
      dataIndex: "m3_t",
    },
    {
      key: "consume",
      title: "T.Thụ",
      dataIndex: "consume",
    },
    {
      key: "total",
      title: "Tổng",
      dataIndex: "total",
    },
    {
      title: "Trong đó",
      children: [
        {
          key: "water_money",
          title: "Tiền nước",
          dataIndex: "water_money",
        },
        {
          key: "vat",
          title: "VAT",
          dataIndex: "vat",
        },
        {
          key: "bvmt",
          title: "Phí BVMT",
          dataIndex: "bvmt",
        },
      ],
    },
    {
      key: "cashier",
      title: "Thu ngân",
      dataIndex: "cashier",
    },
    {
      key: "fall_day",
      title: "Ngày thu",
      dataIndex: "fall_day",
    },
  ];

  return (
    <>
      <h1>CÔNG TY TNHH & CN AMZT VIỆT NAM</h1>

      <div className="title-tbl-his">
        <h1>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</h1>
        <p>Độc lập - Tự do - Hạnh phúc</p>
      </div>

      <div className="title-tbl-report-cus">
        <h1>BÁO CÁO TÌNH HÌNH THU TIỀN NƯỚC CỦA KHÁCH HÀNG</h1>
        <p>Đến tháng: 6/2023</p>
      </div>

      {/* Info */}
      <Row>
        {/* Số thứ tự */}
        <Col xs={24} sm={24} md={12} lg={7} className="gutter-item">
          <div className="info-his-item">
            <p className="info-his-item-lbl">Số thứ tự: </p>
            <p className="info-his-item-val">145</p>
          </div>
        </Col>

        {/* Mã khách hàng cũ */}
        <Col xs={24} sm={24} md={12} lg={7}>
          <div className="info-his-item">
            <p className="info-his-item-lbl">Mã khách hàng cũ: </p>
            <p className="info-his-item-val">LCI00151</p>
          </div>
        </Col>

        {/* Mã khách hàng mới */}
        <Col xs={24} sm={24} md={12} lg={9}>
          <div className="info-his-item">
            <p className="info-his-item-lbl">Mã khách hàng mới: </p>
            <p className="info-his-item-val">LCI00153</p>
          </div>
        </Col>
      </Row>

      <Row>
        {/* Tên khách hàng */}
        <Col xs={24} sm={24} md={12} lg={14} className="gutter-item">
          <div className="info-his-item">
            <p className="info-his-item-lbl">Tên khách hàng: </p>
            <p className="info-his-item-val">Nguyễn Thị Bích</p>
          </div>
        </Col>

        {/* Mã số thuế */}
        <Col xs={24} sm={24} md={12} lg={9}>
          <div className="info-his-item">
            <p className="info-his-item-lbl">Mã số thuế: </p>
            <p className="info-his-item-val">LCI00151</p>
          </div>
        </Col>
      </Row>

      <Row>
        {/* Địa chỉ */}
        <Col xs={24} sm={24} md={12} lg={14} className="gutter-item">
          <div className="info-his-item">
            <p className="info-his-item-lbl">Địa chỉ: </p>
            <p className="info-his-item-val">Bảo Yên - Lào Cai</p>
          </div>
        </Col>

        {/* Đối tượng sử dụng */}
        <Col xs={24} sm={24} md={12} lg={9} className="gutter-item">
          <div className="info-his-item">
            <p className="info-his-item-lbl">Đối tượng sử dụng: </p>
            <p className="info-his-item-val">SH</p>
          </div>
        </Col>
      </Row>

      <Row>
        {/* Địa chỉ sử dung */}
        <Col xs={24} sm={24} md={12} lg={14} className="gutter-item">
          <div className="info-his-item">
            <p className="info-his-item-lbl">Địa chỉ sử dung: </p>
            <p className="info-his-item-val">Bảo Yên - Lào Cai</p>
          </div>
        </Col>

        {/* Mã tiêu thụ */}
        <Col xs={24} sm={24} md={12} lg={9} className="gutter-item">
          <div className="info-his-item">
            <p className="info-his-item-lbl">Mã tiêu thụ: </p>
            <p className="info-his-item-val">LCI00151</p>
          </div>
        </Col>
      </Row>

      <Row>
        {/* Số điện thoại */}
        <Col xs={24} sm={24} md={12} lg={7} className="gutter-item">
          <div className="info-his-item">
            <p className="info-his-item-lbl">Số điện thoại: </p>
            <p className="info-his-item-val">0314798771</p>
          </div>
        </Col>

        {/* Ngày ký HĐ */}
        <Col xs={24} sm={24} md={12} lg={7}>
          <div className="info-his-item">
            <p className="info-his-item-lbl">Ngày ký HĐ: </p>
            <p className="info-his-item-val">14/5/2023</p>
          </div>
        </Col>

        {/* Ngày lắp đặt */}
        <Col xs={24} sm={24} md={12} lg={9} className="gutter-item">
          <div className="info-his-item">
            <p className="info-his-item-lbl">Ngày lắp đặt: </p>
            <p className="info-his-item-val">14/5/2023</p>
          </div>
        </Col>
      </Row>

      <Row>
        {/* Ngày thay cuối */}
        <Col xs={24} sm={24} md={12} lg={7} className="gutter-item">
          <div className="info-his-item">
            <p className="info-his-item-lbl">Ngày thay cuối: </p>
            <p className="info-his-item-val">14/7/2023</p>
          </div>
        </Col>

        {/* Loại ĐH */}
        <Col xs={24} sm={24} md={12} lg={7}>
          <div className="info-his-item">
            <p className="info-his-item-lbl">Loại ĐH: </p>
            <p className="info-his-item-val">145</p>
          </div>
        </Col>

        {/* Số đồng hồ */}
        <Col xs={24} sm={24} md={12} lg={9} className="gutter-item">
          <div className="info-his-item">
            <p className="info-his-item-lbl">Số đồng hồ: </p>
            <p className="info-his-item-val">152461261</p>
          </div>
        </Col>
      </Row>

      <div className="container-tbl-history-water">
        <Table
          columns={cols}
          dataSource={dataHistoryUseWater.map((_history) => ({
            id: _history.id,
            sign: _history.sign,
            lsd: _history.lsd,
            m3_min: _history.m3_min,
            old_index: _history.old_index,
            new_index: _history.new_index,
            m3_k: _history.m3_k,
            m3_t: _history.m3_t,
            consume: _history.consume,
            total: _history.total,
            water_money: _history.water_money,
            vat: _history.vat,
            bvmt: _history.bvmt,
            cashier: _history.cashier,
            fall_day: _history.fall_day,
          }))}
          rowKey="id"
          size="small"
          scroll={{
            x: 1200,
          }}
        ></Table>
      </div>
    </>
  );
}

export default TableHistoryUseWater;
