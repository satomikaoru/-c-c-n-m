/*
 * Ngân hàng câu hỏi Đề tổng hợp các năm khác (127 câu sau khi lọc câu trùng rõ ràng).
 * Mỗi câu có giải thích và nguồn tham chiếu trong trường source.
 * Có thể chỉnh sửa/thêm câu trực tiếp vào mảng này; ID của câu phải duy nhất.
 */
window.QUESTION_BANK = [
  {
    "id": "k21-01",
    "topic": "Tài chính y tế",
    "question": "Hình thức chi trả viện phí trực tiếp từ tiền túi hộ gia đình có hạn chế gì?",
    "options": [
      {
        "id": "a",
        "text": "Tạo gánh nặng tài chính, có thể dẫn đến nghèo hóa vì chi phí y tế."
      },
      {
        "id": "b",
        "text": "Giúp bệnh viện tăng thu nhập ổn định và bền vững trong mọi hoàn cảnh."
      },
      {
        "id": "c",
        "text": "Đảm bảo công bằng trong tiếp cận dịch vụ khám chữa bệnh."
      },
      {
        "id": "d",
        "text": "Không ảnh hưởng đến tình trạng tài chính của hộ gia đình."
      }
    ],
    "answer": "a",
    "explanation": "Khi phải tự thanh toán trực tiếp, người bệnh và gia đình gánh chịu rủi ro tài chính lớn. Chi phí điều trị cao có thể khiến hộ gia đình phải vay nợ, giảm chi tiêu thiết yếu hoặc rơi vào nghèo đói.",
    "source": "Đề K21 · câu về chi trả viện phí từ tiền túi; giải thích bổ sung vì 6 PDF bài giảng không trình bày trực tiếp khái niệm này."
  },
  {
    "id": "k21-02",
    "topic": "Bảo hiểm y tế",
    "question": "Trong công thức tính phí bảo hiểm y tế K = P × C + M, chữ P biểu thị yếu tố nào?",
    "options": [
      {
        "id": "a",
        "text": "Xác suất mắc bệnh hoặc phát sinh nhu cầu sử dụng dịch vụ trong cộng đồng."
      },
      {
        "id": "b",
        "text": "Chi phí điều trị trung bình của bệnh nhân."
      },
      {
        "id": "c",
        "text": "Phần trăm chi phí quản lý quỹ bảo hiểm."
      },
      {
        "id": "d",
        "text": "Quyền lợi được hưởng của người tham gia."
      }
    ],
    "answer": "a",
    "explanation": "P biểu thị xác suất hoặc tần suất phát sinh nhu cầu chăm sóc. C là chi phí cho mỗi trường hợp; M biểu thị phần chi phí quản lý theo cách ký hiệu của đề.",
    "source": "Đề K21 · câu về công thức K = P × C + M; công thức được cung cấp trong đề, không thấy trực tiếp trong 6 PDF bài giảng."
  },
  {
    "id": "k21-03",
    "topic": "Mô hình hệ thống y tế",
    "question": "Mô hình Beveridge được đặc trưng bởi nguồn tài chính chủ yếu từ đâu?",
    "options": [
      {
        "id": "a",
        "text": "Phí dịch vụ được bệnh nhân trực tiếp chi trả."
      },
      {
        "id": "b",
        "text": "Đóng góp của người lao động và người sử dụng lao động."
      },
      {
        "id": "c",
        "text": "Thuế chung do Nhà nước thu và phân bổ."
      },
      {
        "id": "d",
        "text": "Tất cả các nguồn trên đều là nguồn tài chính chủ yếu đặc trưng của mô hình."
      }
    ],
    "answer": "c",
    "explanation": "Mô hình Beveridge chủ yếu tài trợ hệ thống y tế bằng nguồn thu thuế chung. Nhà nước thường đóng vai trò lớn trong việc tổ chức, cung ứng hoặc chi trả cho dịch vụ y tế.",
    "source": "Đề K21 · câu về mô hình Beveridge; khái niệm này không thấy trực tiếp trong 6 PDF bài giảng đã gửi."
  },
  {
    "id": "k21-04",
    "topic": "Chỉ số sức khỏe",
    "question": "DALY được sử dụng để đo lường vấn đề gì?",
    "options": [
      {
        "id": "a",
        "text": "Tốc độ tăng trưởng chi tiêu y tế toàn cầu."
      },
      {
        "id": "b",
        "text": "Số tiền chi tiêu y tế bình quân đầu người trong năm."
      },
      {
        "id": "c",
        "text": "Số năm sống điều chỉnh theo chất lượng cuộc sống (QALY)."
      },
      {
        "id": "d",
        "text": "Gánh nặng bệnh tật, tính bằng số năm sống khỏe mạnh bị mất."
      }
    ],
    "answer": "d",
    "explanation": "DALY (disability-adjusted life year) đo gánh nặng bệnh tật dưới dạng số năm sống khỏe mạnh bị mất do tử vong sớm và sống trong tình trạng bệnh tật hoặc khuyết tật. DALY khác với QALY.",
    "source": "Đề K21 · câu về DALY; khái niệm này không thấy trực tiếp trong 6 PDF bài giảng đã gửi."
  },
  {
    "id": "k21-05",
    "topic": "Bài tập bảo hiểm y tế",
    "question": "Một cộng đồng có 10.000 người; 30% là người già và trẻ em. Xác suất sử dụng dịch vụ y tế hằng năm ở nhóm này là 20%, nhóm còn lại là 10%. Chi phí trung bình mỗi lượt là 500.000 đồng, phí quản lý bằng 8% chi phí khám chữa bệnh dự kiến. Mức phí bình quân đầu người là bao nhiêu?",
    "options": [
      {
        "id": "a",
        "text": "118.600 đồng."
      },
      {
        "id": "b",
        "text": "70.200 đồng."
      },
      {
        "id": "c",
        "text": "42.120 đồng."
      },
      {
        "id": "d",
        "text": "91.000 đồng."
      }
    ],
    "answer": "b",
    "explanation": "Số lượt dự kiến = 3.000 × 20% + 7.000 × 10% = 1.300 lượt. Tổng chi phí dự kiến = 1.300 × 500.000 = 650.000.000 đồng, tương đương 65.000 đồng/người. Cộng phí quản lý 8%: 65.000 × 1,08 = 70.200 đồng/người.",
    "source": "Đề K21 · bài tập tính mức phí BHYT bắt buộc; công thức và dữ kiện lấy từ đề, không thấy trực tiếp trong 6 PDF bài giảng."
  },
  {
    "id": "k21-06",
    "topic": "Hiệu suất",
    "question": "Chỉ tiêu nào phù hợp để đo lường hiệu suất sử dụng nguồn lực nhân lực trong y tế?",
    "options": [
      {
        "id": "a",
        "text": "Số lượng bác sĩ, điều dưỡng trên một nghìn dân."
      },
      {
        "id": "b",
        "text": "Chi phí y tế trung bình của một người dân."
      },
      {
        "id": "c",
        "text": "Số bệnh nhân được phục vụ trên mỗi đơn vị nhân lực y tế."
      },
      {
        "id": "d",
        "text": "Tổng số giờ làm việc của nhân viên y tế trong một tuần."
      }
    ],
    "answer": "c",
    "explanation": "Hiệu suất xem xét mối quan hệ giữa đầu ra và nguồn lực đầu vào. Số bệnh nhân được phục vụ trên mỗi đơn vị nhân lực thể hiện đầu ra tương ứng với nguồn lực đã sử dụng.",
    "source": "Đề K21 · câu về hiệu suất sử dụng nguồn lực; đối chiếu: (SLIDE) Chương 3, PDF tr. 4–6 (hiệu suất và đầu ra trên nguồn lực)."
  },
  {
    "id": "k21-07",
    "topic": "Hiệu quả điều trị",
    "question": "Để đánh giá kết quả điều trị, nhóm chỉ tiêu nào dưới đây phù hợp nhất trong các lựa chọn?",
    "options": [
      {
        "id": "a",
        "text": "Tỷ lệ điều trị thành công và số lượng bác sĩ tham gia điều trị."
      },
      {
        "id": "b",
        "text": "Tỷ lệ điều trị thành công; chi phí trên mỗi bệnh nhân điều trị thành công; tỷ lệ tái nhập viện; thời gian phục hồi trung bình; tỷ lệ biến chứng, sai sót y khoa."
      },
      {
        "id": "c",
        "text": "Tỷ lệ điều trị thành công; số lượng thiết bị y tế được mua sắm trong năm; tỷ lệ biến chứng."
      },
      {
        "id": "d",
        "text": "Tỷ lệ điều trị thành công; mức độ hài lòng với cơ sở vật chất; số lượng giường bệnh."
      }
    ],
    "answer": "b",
    "explanation": "Các chỉ tiêu như thành công điều trị, tái nhập viện, thời gian phục hồi và biến chứng phản ánh kết quả lâm sàng. Chi phí trên mỗi ca điều trị thành công bổ sung góc nhìn kinh tế; số bác sĩ, thiết bị và giường bệnh chủ yếu phản ánh nguồn lực đầu vào.",
    "source": "Đề K21 · câu về chỉ tiêu kết quả điều trị; đối chiếu: (SLIDE) Chương 3, PDF tr. 18–20 (hiệu quả và hiệu quả kỹ thuật trong y tế)."
  },
  {
    "id": "k21-08",
    "topic": "Phân bổ nguồn lực",
    "question": "Khi nguồn lực y tế hạn chế, cách tiếp cận nào phù hợp nhất với lý thuyết phân bổ nguồn lực?",
    "options": [
      {
        "id": "a",
        "text": "Phân bổ theo yêu cầu của nhóm dân số lớn và chỉ ưu tiên can thiệp có chi phí thấp nhất."
      },
      {
        "id": "b",
        "text": "Ưu tiên cơ sở có nhiều bệnh nhân để tối đa hóa số lượt điều trị."
      },
      {
        "id": "c",
        "text": "Dùng các tiêu chí như gánh nặng bệnh tật và hiệu quả lâm sàng để ưu tiên nhóm có nguy cơ cao."
      },
      {
        "id": "d",
        "text": "Phân bổ theo yêu cầu của tổ chức y tế và mức độ sẵn có của thiết bị."
      }
    ],
    "answer": "c",
    "explanation": "Khi nguồn lực khan hiếm, cần cân nhắc nhu cầu sức khỏe, gánh nặng bệnh tật, lợi ích lâm sàng và công bằng. Không nên chỉ dựa vào số bệnh nhân, chi phí thấp nhất hoặc khả năng sẵn có của thiết bị.",
    "source": "Đề K21 · câu về phân bổ nguồn lực khan hiếm; đối chiếu: (SLIDE) Chương 3, PDF tr. 43–48 (phân bổ theo ưu tiên, công bằng và vai trò Nhà nước)."
  },
  {
    "id": "k21-09",
    "topic": "Vai trò Nhà nước",
    "question": "Phát biểu nào thể hiện đúng vai trò của Nhà nước trong phân bổ nguồn lực y tế?",
    "options": [
      {
        "id": "a",
        "text": "Tập trung ngân sách cho bệnh viện lớn và không kiểm soát giá thuốc ở khu vực tư nhân."
      },
      {
        "id": "b",
        "text": "Phát triển hạ tầng y tế chủ yếu dựa vào nguồn thu viện phí."
      },
      {
        "id": "c",
        "text": "Ưu tiên trạm y tế cơ sở ở vùng nông thôn, miền núi để bảo đảm chăm sóc cơ bản cho người nghèo, đồng thời kiểm soát giá thuốc để hỗ trợ khả năng tiếp cận."
      },
      {
        "id": "d",
        "text": "Khuyến khích tư nhân tham gia cung ứng dịch vụ nhưng không quy định cụ thể về giá cả."
      }
    ],
    "answer": "c",
    "explanation": "Vai trò của Nhà nước bao gồm điều tiết thị trường và phân bổ nguồn lực theo mục tiêu sức khỏe cộng đồng, công bằng và tiếp cận dịch vụ thiết yếu, nhất là với nhóm dễ bị tổn thương.",
    "source": "Đề K21 · câu về vai trò Nhà nước; đối chiếu: (SLIDE) Chương 3, PDF tr. 42–48 (phân bổ phi thị trường và vai trò Nhà nước)."
  },
  {
    "id": "k21-10",
    "topic": "Đại cương kinh tế y tế",
    "question": "Kinh tế y tế tập trung chủ yếu vào vấn đề nào?",
    "options": [
      {
        "id": "a",
        "text": "Sử dụng hiệu quả các nguồn lực khan hiếm để đáp ứng nhu cầu chăm sóc sức khỏe."
      },
      {
        "id": "b",
        "text": "Tối đa hóa lợi nhuận của cơ sở y tế công lập."
      },
      {
        "id": "c",
        "text": "Chỉ tăng số lượng bệnh viện trong xã hội."
      },
      {
        "id": "d",
        "text": "Chỉ thống kê chi tiêu y tế của hộ gia đình và cộng đồng."
      }
    ],
    "answer": "a",
    "explanation": "Kinh tế y tế vận dụng tư duy kinh tế để xem xét cách sử dụng nguồn lực có giới hạn, lựa chọn giữa các phương án và cân bằng giữa hiệu quả, công bằng cùng nhu cầu sức khỏe.",
    "source": "Đề K21 · câu về khái niệm kinh tế y tế; đối chiếu: (SLIDE) Chương 1, PDF tr. 41–44."
  },
  {
    "id": "k21-11",
    "topic": "Bảo hiểm y tế xã hội",
    "question": "Nguyên tắc hoạt động cơ bản của bảo hiểm y tế xã hội là gì?",
    "options": [
      {
        "id": "a",
        "text": "Đóng góp tự nguyện, quyền lợi phụ thuộc hoàn toàn vào mức đóng."
      },
      {
        "id": "b",
        "text": "Đóng góp theo khả năng, hưởng theo nhu cầu khám chữa bệnh."
      },
      {
        "id": "c",
        "text": "Đóng góp theo thu nhập, quyền lợi hoàn toàn phụ thuộc vào mức thuế đã nộp."
      },
      {
        "id": "d",
        "text": "Đóng góp theo thị trường, hưởng theo năng lực tài chính."
      }
    ],
    "answer": "b",
    "explanation": "Bảo hiểm y tế xã hội dựa trên nguyên tắc chia sẻ rủi ro: mức đóng gắn với khả năng đóng góp, trong khi việc sử dụng dịch vụ căn cứ vào nhu cầu sức khỏe và quy định quyền lợi.",
    "source": "Đề K21 · câu về nguyên tắc BHYT xã hội; không thấy trình bày trực tiếp trong 6 PDF bài giảng đã gửi."
  },
  {
    "id": "k21-12",
    "topic": "Nguyên tắc cộng đồng",
    "question": "Tính cộng đồng trong bảo hiểm y tế được hiểu như thế nào?",
    "options": [
      {
        "id": "a",
        "text": "Mọi người cùng đóng góp và cùng chia sẻ rủi ro, chi phí chăm sóc sức khỏe."
      },
      {
        "id": "b",
        "text": "Chỉ nhóm thu nhập thấp được tham gia quỹ."
      },
      {
        "id": "c",
        "text": "Toàn bộ mức phí đều do ngân sách Nhà nước chi trả."
      },
      {
        "id": "d",
        "text": "Mức phí phụ thuộc hoàn toàn vào tuổi của người tham gia."
      }
    ],
    "answer": "a",
    "explanation": "Tính cộng đồng thể hiện ở việc nhiều người cùng góp vào quỹ và chia sẻ rủi ro tài chính. Người khỏe góp phần chi trả cho người cần điều trị; mức hưởng không đơn thuần bằng số tiền cá nhân đã đóng.",
    "source": "Đề K21 · câu về tính cộng đồng trong BHYT; không thấy trình bày trực tiếp trong 6 PDF bài giảng đã gửi."
  },
  {
    "id": "k21-13",
    "topic": "Bài tập bảo hiểm y tế",
    "question": "Nếu xác suất ốm P = 20%, chi phí điều trị C = 2.000.000 đồng và chi phí quản lý bằng 8% chi phí điều trị dự kiến, mức phí K là bao nhiêu?",
    "options": [
      {
        "id": "a",
        "text": "400.000 đồng."
      },
      {
        "id": "b",
        "text": "432.000 đồng."
      },
      {
        "id": "c",
        "text": "480.000 đồng."
      },
      {
        "id": "d",
        "text": "500.000 đồng."
      }
    ],
    "answer": "b",
    "explanation": "Chi phí điều trị kỳ vọng = 20% × 2.000.000 = 400.000 đồng. Chi phí quản lý = 8% × 400.000 = 32.000 đồng. Tổng phí = 400.000 + 32.000 = 432.000 đồng.",
    "source": "Đề K21 · bài tập tính phí K = P × C + M; công thức lấy từ đề, không thấy trực tiếp trong 6 PDF bài giảng."
  },
  {
    "id": "k21-14",
    "topic": "Bảo hiểm y tế xã hội",
    "question": "Bảo hiểm y tế xã hội thường được áp dụng theo hình thức nào?",
    "options": [
      {
        "id": "a",
        "text": "Tự nguyện cho mọi đối tượng, không có quy định pháp luật."
      },
      {
        "id": "b",
        "text": "Bắt buộc theo quy định pháp luật đối với các nhóm thuộc diện tham gia."
      },
      {
        "id": "c",
        "text": "Chỉ dành cho công chức nhà nước."
      },
      {
        "id": "d",
        "text": "Chỉ dành cho người làm việc trong doanh nghiệp tư nhân."
      }
    ],
    "answer": "b",
    "explanation": "Bảo hiểm y tế xã hội thường được luật hóa với phạm vi tham gia bắt buộc theo các nhóm đối tượng, nhằm mở rộng bao phủ và chia sẻ rủi ro trong cộng đồng.",
    "source": "Đề K21 · câu về BHYT xã hội bắt buộc; không thấy trình bày trực tiếp trong 6 PDF bài giảng đã gửi."
  },
  {
    "id": "k21-15",
    "topic": "Phân tích kinh tế y tế",
    "question": "Hai phương pháp điều trị COPD có chi phí lần lượt là 300.000 đồng và 350.000 đồng mỗi đợt, đồng thời giúp ngăn ngừa biến chứng trong 6 tháng và 6,5 tháng. Loại phân tích kinh tế nào phù hợp nhất với dữ kiện này?",
    "options": [
      {
        "id": "a",
        "text": "Phân tích chi phí – thỏa dụng (CUA)."
      },
      {
        "id": "b",
        "text": "Phân tích tối thiểu hóa chi phí (CMA)."
      },
      {
        "id": "c",
        "text": "Phân tích chi phí – hiệu quả (CEA)."
      },
      {
        "id": "d",
        "text": "Phân tích chi phí – lợi ích (CBA)."
      }
    ],
    "answer": "c",
    "explanation": "Hai phương án có chi phí khác nhau và kết quả được biểu thị bằng một đơn vị hiệu quả lâm sàng cụ thể (thời gian ngăn ngừa biến chứng). CEA so sánh chi phí với kết quả sức khỏe đo bằng đơn vị tự nhiên. CMA chỉ phù hợp khi kết quả tương đương.",
    "source": "Đề K21 · tình huống so sánh phương pháp điều trị COPD; đối chiếu khái quát về phân tích chi phí–hiệu quả: (SLIDE) Chương 1, PDF tr. 43–44; chi phí dịch vụ: Phân tích chi phí kinh tế trong y tế, PDF tr. 26."
  },
  {
    "id": "k21-16",
    "topic": "Thanh toán dịch vụ y tế",
    "question": "Trong bối cảnh chi trả theo định suất, thuật ngữ “hớt váng” (cream skimming) mô tả hành vi nào?",
    "options": [
      {
        "id": "a",
        "text": "Ưu tiên chọn bệnh nhân tương đối khỏe, có chi phí điều trị thấp để tối đa hóa lợi ích tài chính."
      },
      {
        "id": "b",
        "text": "Mở rộng dịch vụ kỹ thuật cao chủ yếu để điều trị nhóm bệnh nhân nặng."
      },
      {
        "id": "c",
        "text": "Tăng chi cho dự phòng để giảm số lượt nhập viện."
      },
      {
        "id": "d",
        "text": "Chia sẻ đồng đều mọi chi phí giữa tất cả các cơ sở y tế."
      }
    ],
    "answer": "a",
    "explanation": "Cream skimming là xu hướng lựa chọn người bệnh có rủi ro hoặc chi phí dự kiến thấp, tránh nhóm cần nhiều nguồn lực. Hành vi này có thể làm giảm công bằng trong tiếp cận dịch vụ.",
    "source": "Đề K21 · câu về “hớt váng” (cream skimming); thuật ngữ này không thấy trực tiếp trong 6 PDF bài giảng đã gửi."
  },
  {
    "id": "k21-17",
    "topic": "Bài tập xác suất",
    "question": "Một cộng đồng có 15.000 người: trẻ em chiếm 20%, người già 10%, người trưởng thành 70%. Xác suất sử dụng dịch vụ y tế hằng năm tương ứng là 25%, 40% và 15%. Xác suất sử dụng chung của toàn cộng đồng là bao nhiêu?",
    "options": [
      {
        "id": "a",
        "text": "20,5%."
      },
      {
        "id": "b",
        "text": "22,5%."
      },
      {
        "id": "c",
        "text": "19,5%."
      },
      {
        "id": "d",
        "text": "25,0%."
      }
    ],
    "answer": "c",
    "explanation": "Xác suất chung là trung bình có trọng số: 20% × 25% + 10% × 40% + 70% × 15% = 5% + 4% + 10,5% = 19,5%.",
    "source": "Đề K21 · bài tập xác suất sử dụng dịch vụ y tế; tính toán theo dữ kiện của đề, không có công thức xác suất có trọng số trình bày trực tiếp trong 6 PDF."
  },
  {
    "id": "k21-18",
    "topic": "Đánh giá hoạt động y tế",
    "question": "Nội dung nào sau đây không phải là mục đích chính trực tiếp của đánh giá thực hiện kế hoạch tài chính y tế?",
    "options": [
      {
        "id": "a",
        "text": "Xem kế hoạch đề ra đã được thực hiện như thế nào."
      },
      {
        "id": "b",
        "text": "Đánh giá mức độ đạt được các mục tiêu."
      },
      {
        "id": "c",
        "text": "Xem kết quả đạt được có tương xứng với nguồn lực đã sử dụng không."
      },
      {
        "id": "d",
        "text": "Đào tạo và phát triển nhân lực như một hoạt động độc lập với đánh giá kế hoạch."
      }
    ],
    "answer": "d",
    "explanation": "Đánh giá kế hoạch tập trung vào tiến độ thực hiện, mức độ đạt mục tiêu và tương quan giữa kết quả với nguồn lực. Đào tạo nhân lực có thể là hoạt động quản lý hữu ích, nhưng không phải mục đích đánh giá được hỏi trực tiếp ở đây.",
    "source": "Đề K21 · câu về mục đích đánh giá thực hiện kế hoạch tài chính; đối chiếu: Lập kế hoạch tài chính y tế, PDF tr. 24."
  },
  {
    "id": "k21-19",
    "topic": "Hoạt động trong cơ sở y tế",
    "question": "Trong một cơ sở khám chữa bệnh, hoạt động nào sau đây là hoạt động trực tiếp trong y tế?",
    "options": [
      {
        "id": "a",
        "text": "Khám bệnh và điều trị."
      },
      {
        "id": "b",
        "text": "Vệ sinh và nhà ăn."
      },
      {
        "id": "c",
        "text": "Kế toán và thu ngân."
      },
      {
        "id": "d",
        "text": "Hành chính và nhân sự."
      }
    ],
    "answer": "a",
    "explanation": "Khám và điều trị trực tiếp tạo ra dịch vụ chăm sóc người bệnh. Vệ sinh, nhà ăn, kế toán, thu ngân và nhân sự là các hoạt động hỗ trợ hoặc gián tiếp.",
    "source": "Đề K21 · câu về hoạt động trực tiếp trong cơ sở y tế; đối chiếu: Phân tích chi phí kinh tế trong y tế, PDF tr. 15 (phân biệt hoạt động trực tiếp và gián tiếp)."
  },
  {
    "id": "k21-20",
    "topic": "Hoạt động trong cơ sở y tế",
    "question": "Hoạt động nào sau đây được xem là hoạt động gián tiếp trong cơ sở khám chữa bệnh?",
    "options": [
      {
        "id": "a",
        "text": "Chụp X-quang cho người bệnh."
      },
      {
        "id": "b",
        "text": "Khám bệnh và điều trị."
      },
      {
        "id": "c",
        "text": "Thực hiện xét nghiệm."
      },
      {
        "id": "d",
        "text": "Hành chính và nhân sự."
      }
    ],
    "answer": "d",
    "explanation": "Hành chính và nhân sự hỗ trợ hoạt động của cơ sở nhưng không trực tiếp cung cấp dịch vụ khám, chẩn đoán hoặc điều trị cho một lượt bệnh nhân cụ thể.",
    "source": "Đề K21 · câu về hoạt động gián tiếp trong cơ sở y tế; đối chiếu: Phân tích chi phí kinh tế trong y tế, PDF tr. 15."
  },
  {
    "id": "k21-21",
    "topic": "Đặc điểm thị trường y tế",
    "question": "Một người tiêm vaccine không chỉ bảo vệ bản thân mà còn góp phần giảm lây nhiễm cho cộng đồng. Ví dụ này minh họa đặc tính nào của thị trường chăm sóc sức khỏe?",
    "options": [
      {
        "id": "a",
        "text": "Lựa chọn ngược."
      },
      {
        "id": "b",
        "text": "Ngoại tác tích cực."
      },
      {
        "id": "c",
        "text": "Bất đối xứng thông tin."
      },
      {
        "id": "d",
        "text": "Nhu cầu chăm sóc sức khỏe không thể dự báo."
      }
    ],
    "answer": "b",
    "explanation": "Ngoại tác tích cực xuất hiện khi hành động của một người đem lại lợi ích cho người khác mà lợi ích đó không chỉ giới hạn ở người trực tiếp thực hiện hành động. Tiêm chủng có thể làm giảm nguy cơ lây lan trong cộng đồng.",
    "source": "Đề K21 · câu về vaccine và ngoại tác tích cực; đối chiếu: (SLIDE) Chương 1, PDF tr. 52–55 (đặc tính thị trường chăm sóc sức khỏe và ngoại tác)."
  },
  {
    "id": "k21-22",
    "topic": "Đặc điểm thị trường y tế",
    "question": "Ví dụ nào thể hiện rõ nhất tình trạng bất đối xứng thông tin giữa người cung cấp và người sử dụng dịch vụ chăm sóc sức khỏe?",
    "options": [
      {
        "id": "a",
        "text": "Người mua bảo hiểm tự nguyện che giấu tình trạng sức khỏe để được hưởng mức phí thấp hơn."
      },
      {
        "id": "b",
        "text": "Bệnh nhân dùng dịch vụ nhiều hơn vì chi phí được bảo hiểm chi trả."
      },
      {
        "id": "c",
        "text": "Một người không thể dự báo chính xác thời điểm mình sẽ mắc bệnh."
      },
      {
        "id": "d",
        "text": "Bác sĩ có kiến thức chuyên môn vượt trội nên bệnh nhân khó tự đánh giá đầy đủ sự cần thiết của một số xét nghiệm hoặc điều trị."
      }
    ],
    "answer": "d",
    "explanation": "Bất đối xứng thông tin xảy ra khi một bên nắm thông tin nhiều hơn bên còn lại. A có thể là lựa chọn ngược; B thường liên quan đến rủi ro đạo đức; C thể hiện tính không chắc chắn của nhu cầu sức khỏe.",
    "source": "Đề K21 · câu về bất đối xứng thông tin; đối chiếu: (SLIDE) Chương 1, PDF tr. 53–54."
  },
  {
    "id": "k21-23",
    "topic": "Phân tích chi phí hiệu quả",
    "question": "Trong quy trình phân tích chi phí – hiệu quả, bước xác định và đo lường chi phí của từng phương án tương ứng với nội dung nào?",
    "options": [
      {
        "id": "a",
        "text": "Tính tỷ số chi phí – hiệu quả cuối cùng cho từng phương án."
      },
      {
        "id": "b",
        "text": "Liệt kê các phương án có thể đạt mục tiêu."
      },
      {
        "id": "c",
        "text": "Xác định và đo lường kết quả sức khỏe của từng phương án."
      },
      {
        "id": "d",
        "text": "Xác định và đo lường chi phí của từng phương án."
      }
    ],
    "answer": "d",
    "explanation": "Trước khi so sánh chi phí với hiệu quả, cần nhận diện và đo lường chi phí của từng lựa chọn. Sau đó mới đo lường kết quả sức khỏe và tính toán, so sánh các chỉ số chi phí – hiệu quả.",
    "source": "Đề K21 · câu về các bước phân tích chi phí–hiệu quả; (SLIDE) Chương 1, PDF tr. 43–44 chỉ nêu các loại phân tích kinh tế, không trình bày đầy đủ từng bước."
  },
  {
    "id": "k21-24",
    "topic": "Tài chính y tế",
    "question": "Cách diễn đạt nào phản ánh đầy đủ nhất các chức năng chính của tài chính y tế?",
    "options": [
      {
        "id": "a",
        "text": "Huy động nguồn lực tài chính, gộp/chia sẻ rủi ro tài chính và mua sắm hoặc chi trả dịch vụ y tế."
      },
      {
        "id": "b",
        "text": "Chỉ thu và chi ngân sách y tế công, không liên quan đến phân bổ nguồn lực."
      },
      {
        "id": "c",
        "text": "Chỉ xây dựng hệ thống tiền lương và đánh giá chi tiêu quốc gia."
      },
      {
        "id": "d",
        "text": "Trực tiếp cung cấp mọi dịch vụ khám chữa bệnh cho toàn bộ người dân."
      }
    ],
    "answer": "a",
    "explanation": "Tài chính y tế thường được mô tả qua ba chức năng chính: huy động nguồn thu, gộp nguồn lực để chia sẻ rủi ro và phân bổ/mua sắm dịch vụ y tế. Chỉ thu ngân sách hoặc trực tiếp cung cấp dịch vụ không bao quát đủ các chức năng này.",
    "source": "Đề K21 · câu về chức năng tài chính y tế; đối chiếu khái quát về tài chính và phân bổ nguồn lực: (SLIDE) Chương 1, PDF tr. 43–47; ba chức năng tài chính y tế không được trình bày nguyên văn trong bộ slide."
  },
  {
    "id": "k21-25",
    "topic": "Phương thức chi trả",
    "question": "Ưu điểm nào thường được nhắc đến của phương thức thanh toán theo phí dịch vụ?",
    "options": [
      {
        "id": "a",
        "text": "Luôn khuyến khích dự phòng và giảm số lượng dịch vụ được cung cấp."
      },
      {
        "id": "b",
        "text": "Tự động giúp bên chi trả kiểm soát tổng chi phí."
      },
      {
        "id": "c",
        "text": "Từng dịch vụ được ghi nhận và tính phí riêng, nên cách tính thanh toán tương đối rõ ràng."
      },
      {
        "id": "d",
        "text": "Loại bỏ hoàn toàn động cơ cung cấp quá nhiều dịch vụ."
      }
    ],
    "answer": "c",
    "explanation": "Thanh toán theo phí dịch vụ gắn khoản chi trả với từng dịch vụ đã cung cấp, vì vậy việc ghi nhận và tính toán khoản thanh toán tương đối trực tiếp. Tuy nhiên, phương thức này có thể tạo động cơ gia tăng số lượng dịch vụ và khiến tổng chi phí khó kiểm soát.",
    "source": "Đề K21 · câu về ưu điểm thanh toán theo phí dịch vụ; không thấy trình bày trực tiếp trong 6 PDF bài giảng đã gửi."
  },
  {
    "id": "k21-26",
    "topic": "Cung – cầu",
    "question": "Các yếu tố nào dưới đây tác động trực tiếp đến lượng cung hàng hóa/dịch vụ?",
    "options": [
      {
        "id": "a",
        "text": "Chính sách của chính phủ, kỳ vọng của nhà sản xuất, số lượng nhà cung cấp, điều kiện tự nhiên và kỳ vọng của người tiêu dùng."
      },
      {
        "id": "b",
        "text": "Giá hàng hóa/dịch vụ, chi phí sản xuất, công nghệ sản xuất, thâm hụt thương mại và kỳ vọng của nhà sản xuất."
      },
      {
        "id": "c",
        "text": "Chính sách của chính phủ, chính sách của nhà sản xuất, thu nhập hộ gia đình và giá hàng hóa thay thế."
      },
      {
        "id": "d",
        "text": "Giá hàng hóa/dịch vụ, chi phí sản xuất, công nghệ, chính sách chính phủ, kỳ vọng của nhà sản xuất, số nhà cung cấp, điều kiện tự nhiên và giá hàng hóa liên quan."
      }
    ],
    "answer": "d",
    "explanation": "Lượng cung chịu ảnh hưởng bởi giá bán, chi phí đầu vào, công nghệ, số lượng doanh nghiệp, kỳ vọng của nhà sản xuất và điều kiện tự nhiên. Phương án D bao quát đầy đủ nhất các yếu tố cung trong những lựa chọn này.",
    "source": "Đề K21 · mã đề 001, câu 1, trang đề 1/11; đối chiếu: (SLIDE) Chương 1, PDF tr. 21–24 (cung và yếu tố quyết định cung)."
  },
  {
    "id": "k21-27",
    "topic": "Cung – cầu",
    "question": "Nhân tố nào sau đây không ảnh hưởng trực tiếp đến lượng cầu hàng hóa/dịch vụ trên thị trường?",
    "options": [
      {
        "id": "a",
        "text": "Hàng hóa thay thế và hàng hóa bổ sung."
      },
      {
        "id": "b",
        "text": "Hiệu suất lao động và năng suất lao động xã hội."
      },
      {
        "id": "c",
        "text": "Mẫu mã sản phẩm và chất lượng hàng hóa/dịch vụ."
      },
      {
        "id": "d",
        "text": "Kỳ vọng của người tiêu dùng."
      }
    ],
    "answer": "b",
    "explanation": "Các yếu tố cầu thường gồm thu nhập, giá hàng liên quan, thị hiếu, quy mô dân số và kỳ vọng người tiêu dùng. Năng suất lao động không phải yếu tố quyết định cầu trực tiếp được liệt kê trong slide.",
    "source": "Đề K21 · mã đề 001, câu 2, trang đề 1/11; đối chiếu: (SLIDE) Chương 1, PDF tr. 20 (các yếu tố quyết định cầu)."
  },
  {
    "id": "k21-28",
    "topic": "Cung – cầu",
    "question": "Yếu tố nào làm thay đổi lượng cầu trên đường cầu, nhưng không làm dịch chuyển cả đường cầu của hàng hóa X?",
    "options": [
      {
        "id": "a",
        "text": "Giá của chính hàng hóa/dịch vụ X."
      },
      {
        "id": "b",
        "text": "Thu nhập của dân cư tăng lên."
      },
      {
        "id": "c",
        "text": "Kỳ vọng của người tiêu dùng thay đổi."
      },
      {
        "id": "d",
        "text": "Thị hiếu hoặc chất lượng cảm nhận của sản phẩm thay đổi."
      }
    ],
    "answer": "a",
    "explanation": "Khi giá của chính hàng hóa thay đổi, người tiêu dùng di chuyển dọc theo đường cầu. Các yếu tố khác như thu nhập, kỳ vọng và thị hiếu có thể làm cả đường cầu dịch chuyển.",
    "source": "Đề K21 · mã đề 001, câu 3, trang đề 1/11; đối chiếu: (SLIDE) Chương 1, PDF tr. 20 và 29–30 (yếu tố cầu, đường cầu và dịch chuyển đường cầu)."
  },
  {
    "id": "k21-29",
    "topic": "Cung – cầu",
    "question": "Nếu giá thị trường giảm, tình huống cung – cầu nào phù hợp nhất với cân bằng thị trường?",
    "options": [
      {
        "id": "a",
        "text": "Thiếu phát."
      },
      {
        "id": "b",
        "text": "Cung ít, cầu nhiều."
      },
      {
        "id": "c",
        "text": "Cung nhiều, cầu ít."
      },
      {
        "id": "d",
        "text": "Siêu lạm phát."
      }
    ],
    "answer": "c",
    "explanation": "Khi lượng cung lớn hơn lượng cầu, thị trường có xu hướng dư cung và gây áp lực giảm giá. Ngược lại, khi cầu vượt cung, giá thường tăng.",
    "source": "Đề K21 · mã đề 001, câu 4, trang đề 1/11; đối chiếu: (SLIDE) Chương 1, PDF tr. 28 (quan hệ cung – cầu và giá)."
  },
  {
    "id": "k21-30",
    "topic": "Cung – cầu",
    "question": "Tình huống nào chắc chắn làm giá cân bằng giảm?",
    "options": [
      {
        "id": "a",
        "text": "Cả cung và cầu đều tăng."
      },
      {
        "id": "b",
        "text": "Cả cung và cầu đều giảm."
      },
      {
        "id": "c",
        "text": "Cầu giảm đồng thời cung tăng."
      },
      {
        "id": "d",
        "text": "Cầu tăng đồng thời cung giảm."
      }
    ],
    "answer": "c",
    "explanation": "Cầu giảm làm giá cân bằng có xu hướng giảm; cung tăng cũng làm giá cân bằng giảm. Khi hai thay đổi này cùng xảy ra, cả hai đều đẩy giá theo hướng giảm. Câu được diễn đạt rõ hơn theo hướng giá giảm vì đề gốc chỉ hỏi chung về dịch chuyển giá cân bằng, trong khi cả C và D đều làm giá thay đổi theo hai hướng ngược nhau.",
    "source": "Đề K21 · mã đề 001, câu 5, trang đề 1/11; đối chiếu: (SLIDE) Chương 1, PDF tr. 29–30 (dịch chuyển đường cung, đường cầu và giá cân bằng)."
  },
  {
    "id": "k21-31",
    "topic": "GDP và đầu tư",
    "question": "Một dự án nhà máy trị giá 25 triệu USD hoàn thành 60% giá trị công trình trong năm 2021. Một lô thiết bị lỗi trị giá 2 triệu USD được trả lại; thiết bị thay thế trị giá 0,5 triệu USD được giao trong năm 2021 và 1,5 triệu USD được giao trong năm 2022. Phần công trình còn lại 40% hoàn thành trong năm 2022. Theo cách tính giá trị sản xuất trong năm, giá trị ghi nhận vào GDP Việt Nam năm 2022 theo dữ kiện này là bao nhiêu?",
    "options": [
      {
        "id": "a",
        "text": "25.000.000 USD."
      },
      {
        "id": "b",
        "text": "10.000.000 USD."
      },
      {
        "id": "c",
        "text": "11.500.000 USD."
      },
      {
        "id": "d",
        "text": "8.000.000 USD."
      }
    ],
    "answer": "c",
    "explanation": "Phần công trình hoàn thành trong năm 2022 là 40% × 25 triệu = 10 triệu USD. Cộng thiết bị thay thế trị giá 1,5 triệu USD được giao trong năm 2022: 10 + 1,5 = 11,5 triệu USD. Phải xét phần sản xuất/hoàn thành trong kỳ, không cộng toàn bộ giá trị hợp đồng ngay khi ký.",
    "source": "Đề K21 · mã đề 002, câu 11, trang đề 3/11; đối chiếu định nghĩa GDP: (SLIDE) Chương 1, PDF tr. 34–35. Phép tính theo dữ kiện của đề."
  },
  {
    "id": "k21-32",
    "topic": "GDP và GNP",
    "question": "Trong các tình huống sau, tình huống nào có vẻ được người ra đề dự định dùng để minh họa nguồn thu nhập từ nước ngoài khi hỏi về GNP Việt Nam năm 2025?",
    "options": [
      {
        "id": "a",
        "text": "Một tập đoàn trả nợ gốc và lãi cho khoản vay đầu tư nhà máy từ năm 2020."
      },
      {
        "id": "b",
        "text": "Nhà nước tặng quà tiền mặt cho người dân trong dịp Quốc khánh."
      },
      {
        "id": "c",
        "text": "Kiều hối chuyển từ nước ngoài về TP.HCM."
      },
      {
        "id": "d",
        "text": "Một doanh nghiệp FDI chỉ ký cam kết đầu tư trong tương lai."
      }
    ],
    "answer": "c",
    "explanation": "Trong bốn lựa chọn, C có vẻ là đáp án người ra đề nhắm tới vì liên quan đến dòng tiền từ nước ngoài. Tuy nhiên, cần lưu ý về mặt hạch toán quốc gia: kiều hối không tự động được tính vào GNP chỉ vì tiền được chuyển về; phải xác định đó là thu nhập sơ cấp từ hoạt động sản xuất của công dân/người cư trú hay khoản chuyển giao. Câu hỏi gốc vì thế chưa thật chặt về khái niệm.",
    "source": "Đề K21 · mã đề 002, câu 12, trang đề 3/11; đối chiếu định nghĩa GDP/GNP: (SLIDE) Chương 1, PDF tr. 34 và 38. Lưu ý: ví dụ kiều hối trong đề có điểm chưa chặt về hạch toán GNP."
  },
  {
    "id": "k21-33",
    "topic": "Hiệu quả kỹ thuật",
    "question": "Hiệu quả kỹ thuật trong y tế được hiểu gần nhất là gì?",
    "options": [
      {
        "id": "a",
        "text": "Khả năng phát huy tác dụng của một tác nhân trong điều kiện thử nghiệm."
      },
      {
        "id": "b",
        "text": "Đạt cùng mức đầu ra với ít đầu vào/chi phí nguồn lực hơn, hoặc tạo đầu ra tối đa từ một tập hợp đầu vào nhất định."
      },
      {
        "id": "c",
        "text": "Mức độ phát huy tác dụng của một loại nguồn lực trên thực tế trong điều kiện thường ngày."
      },
      {
        "id": "d",
        "text": "Khối lượng công việc làm được trong một thời gian nhất định."
      }
    ],
    "answer": "b",
    "explanation": "Hiệu quả kỹ thuật tập trung vào mối quan hệ đầu vào – đầu ra: với một lượng đầu vào nhất định tạo ra đầu ra cao nhất, hoặc giữ đầu ra mà dùng ít đầu vào hơn. A gần với efficacy trong điều kiện thử nghiệm; C gần với effectiveness trong thực tế; D mô tả năng suất.",
    "source": "Đề K21 · mã đề 001, câu 10, trang đề 2/11; đối chiếu: (SLIDE) Chương 3, PDF tr. 19–20 (hiệu quả và hiệu quả kỹ thuật trong y tế)."
  },
  {
    "id": "k21-34",
    "topic": "Phân tích chi phí",
    "question": "Vaccine X có chi phí 300.000 đồng/liều và ngăn ngừa 60 ca bệnh trên 1.000 người; vaccine Y có chi phí 450.000 đồng/liều và ngăn ngừa 100 ca bệnh trên 1.000 người. Nếu muốn so sánh chi phí với số ca bệnh được phòng ngừa, loại phân tích nào phù hợp nhất?",
    "options": [
      {
        "id": "a",
        "text": "Phân tích chi phí – thỏa dụng (CUA)."
      },
      {
        "id": "b",
        "text": "Phân tích chi phí – hiệu quả (CEA)."
      },
      {
        "id": "c",
        "text": "Phân tích tối thiểu hóa chi phí (CMA)."
      },
      {
        "id": "d",
        "text": "Phân tích chi phí – lợi ích (CBA)."
      }
    ],
    "answer": "b",
    "explanation": "Kết quả được đo bằng đơn vị sức khỏe tự nhiên là số ca bệnh được phòng ngừa, còn chi phí tính bằng tiền. Đây là phân tích chi phí – hiệu quả (CEA). CUA thường dùng đơn vị như QALY; CMA chỉ phù hợp khi hiệu quả của các lựa chọn tương đương; CBA quy đổi lợi ích sang tiền.",
    "source": "Đề K21 · câu hỏi so sánh chi phí hai loại vaccine; đối chiếu khái quát về đánh giá kinh tế y tế: (SLIDE) Chương 1, PDF tr. 43–44."
  },
  {
    "id": "k21-35",
    "topic": "Chi phí cơ hội",
    "question": "Một sinh viên ngành dược có ba lựa chọn: (1) tự mở nhà thuốc và trực tiếp bán, lợi nhuận 10 triệu đồng/tháng; (2) mở nhà thuốc thuê người bán, lợi nhuận 7 triệu đồng/tháng và làm bệnh viện được 1 triệu đồng/tháng; (3) làm bệnh viện và học thêm, thu nhập 5 triệu đồng/tháng. Theo cách tính trong slide, nếu chọn phương án 2 thì chi phí cơ hội là bao nhiêu?",
    "options": [
      {
        "id": "a",
        "text": "2 triệu đồng/tháng."
      },
      {
        "id": "b",
        "text": "4 triệu đồng/tháng."
      },
      {
        "id": "c",
        "text": "3 triệu đồng/tháng."
      },
      {
        "id": "d",
        "text": "5 triệu đồng/tháng."
      }
    ],
    "answer": "a",
    "explanation": "Phương án 2 đem lại tổng 7 + 1 = 8 triệu đồng/tháng. Phương án tốt nhất bị bỏ lỡ là phương án 1 với 10 triệu đồng/tháng. Theo công thức trình bày trong slide: 10 − 8 = 2 triệu đồng/tháng.",
    "source": "Đề K21 · mã đề 002, câu 41, trang đề 9/11; đối chiếu: Phân tích chi phí kinh tế trong y tế, PDF tr. 5–6 (khái niệm và ví dụ chi phí cơ hội)."
  },
  {
    "id": "k21-36",
    "topic": "Phân loại chi phí người bệnh",
    "question": "Trong bảng chi phí người bệnh có các khoản: nằm viện, xét nghiệm máu, thuốc, ăn uống bên ngoài, xe cấp cứu bệnh viện và xe Grab. Có bao nhiêu khoản thuộc nhóm chi phí vật chất trực tiếp trong y tế?",
    "options": [
      {
        "id": "a",
        "text": "2 khoản."
      },
      {
        "id": "b",
        "text": "3 khoản."
      },
      {
        "id": "c",
        "text": "4 khoản."
      },
      {
        "id": "d",
        "text": "5 khoản."
      }
    ],
    "answer": "b",
    "explanation": "Nằm viện, xét nghiệm máu và thuốc là ba khoản chi phí vật chất trực tiếp trong y tế. Ăn uống bên ngoài và phương tiện đi lại được xếp vào chi phí trực tiếp ngoài y tế theo cách phân loại trên slide.",
    "source": "Đề K21 · mã đề 002, câu 42, trang đề 9/11; đối chiếu: Phân tích chi phí kinh tế trong y tế, PDF tr. 7–9 (phân loại chi phí người sử dụng dịch vụ)."
  },
  {
    "id": "k21-37",
    "topic": "Tính chi phí người bệnh",
    "question": "Theo bảng chi phí bệnh nhân: nằm viện 5 ngày × 500.000 đồng/ngày; xét nghiệm 2 lần × 250.000 đồng; thuốc 1 đơn × 1.500.000 đồng; ăn uống 5 ngày × 200.000 đồng; Grab 2 lượt × 300.000 đồng; chi phí khác 3 ngày × 200.000 đồng. Tổng các khoản chi phí vật chất là bao nhiêu?",
    "options": [
      {
        "id": "a",
        "text": "5.700.000 đồng."
      },
      {
        "id": "b",
        "text": "6.200.000 đồng."
      },
      {
        "id": "c",
        "text": "6.700.000 đồng."
      },
      {
        "id": "d",
        "text": "7.100.000 đồng."
      }
    ],
    "answer": "c",
    "explanation": "Cộng từng khoản: 2.500.000 + 500.000 + 1.500.000 + 1.000.000 + 600.000 + 600.000 = 6.700.000 đồng.",
    "source": "Đề K21 · mã đề 002, bảng chi phí bệnh nhân ở trang đề 9/11; đối chiếu cách phân loại và tính chi phí: Phân tích chi phí kinh tế trong y tế, PDF tr. 8–10."
  },
  {
    "id": "k21-38",
    "topic": "Lập kế hoạch tài chính",
    "question": "Theo bài giảng, cơ sở quan trọng nhất để lập dự toán/kế hoạch tài chính cho một chương trình hoặc hoạt động y tế là gì?",
    "options": [
      {
        "id": "a",
        "text": "Chỉ dựa vào tổng số tiền đã chi trong năm trước."
      },
      {
        "id": "b",
        "text": "Chỉ tiêu số lượng bệnh nhân, không cần phân tích công việc."
      },
      {
        "id": "c",
        "text": "Cấu trúc phân chia công việc (WBS), từ đó xác định nguồn lực và chi phí cho từng công việc."
      },
      {
        "id": "d",
        "text": "Mức kinh phí còn dư sau khi kết thúc năm."
      }
    ],
    "answer": "c",
    "explanation": "WBS chia kế hoạch thành các cấu phần/công việc cụ thể. Với từng công việc có thể xác định nhu cầu nguồn lực và tính chi phí, sau đó tổng hợp thành dự toán.",
    "source": "Đề K21 · mã đề 002, câu 43, trang đề 9/11; đối chiếu: Lập kế hoạch tài chính y tế, PDF tr. 12–15 (phương pháp lập dự toán và WBS)."
  },
  {
    "id": "k21-39",
    "topic": "Lập kế hoạch tài chính",
    "question": "Kế hoạch tài chính y tế hỗ trợ trực tiếp nhất cho hoạt động nào?",
    "options": [
      {
        "id": "a",
        "text": "Chỉ việc điều trị chuyên môn tại giường bệnh."
      },
      {
        "id": "b",
        "text": "Công tác quản lý, điều hành và quyết định sử dụng nguồn lực của cơ sở/chương trình y tế."
      },
      {
        "id": "c",
        "text": "Chỉ hoạt động truyền thông cho người bệnh."
      },
      {
        "id": "d",
        "text": "Thay thế hoàn toàn kế hoạch chuyên môn và kế hoạch nhân lực."
      }
    ],
    "answer": "b",
    "explanation": "Kế hoạch tài chính dự trù các nguồn lực tài chính cần có và cách thu – chi cho hoạt động y tế, giúp người quản lý phân bổ nguồn lực, kiểm soát chi tiêu và điều hành hoạt động.",
    "source": "Đề K21 · mã đề 002, câu 44, trang đề 9–10/11; đối chiếu: Lập kế hoạch tài chính y tế, PDF tr. 5 và 10."
  },
  {
    "id": "k21-40",
    "topic": "Lập kế hoạch tài chính",
    "question": "Khi lập kế hoạch tài chính y tế, đơn giá, chi phí và định mức chi cần được xây dựng như thế nào?",
    "options": [
      {
        "id": "a",
        "text": "Theo ước lượng chủ quan của người lập kế hoạch."
      },
      {
        "id": "b",
        "text": "Theo mức chi cao nhất của các cơ sở tư nhân."
      },
      {
        "id": "c",
        "text": "Theo quy định, định mức và hướng dẫn hiện hành."
      },
      {
        "id": "d",
        "text": "Không cần căn cứ định mức nếu ngân sách còn đủ."
      }
    ],
    "answer": "c",
    "explanation": "Bài giảng nêu rõ nguyên tắc lập kế hoạch tài chính phải tuân thủ luật pháp, quy định và thỏa thuận; đơn giá, chi phí và định mức chi phải theo quy định.",
    "source": "Đề K21 · nhóm câu về nguyên tắc lập kế hoạch tài chính; đối chiếu: Lập kế hoạch tài chính y tế, PDF tr. 11."
  },
  {
    "id": "k21-41",
    "topic": "Phân tích chi phí – hiệu quả",
    "question": "Theo câu hỏi trong đề K21, bước 3 của phân tích chi phí – hiệu quả là gì?",
    "options": [
      {
        "id": "a",
        "text": "Tính tỷ số chi phí – hiệu quả cuối cùng của từng phương án."
      },
      {
        "id": "b",
        "text": "Xác định các phương án có thể đạt được mục tiêu."
      },
      {
        "id": "c",
        "text": "Xác định và đo lường hiệu quả của từng phương án."
      },
      {
        "id": "d",
        "text": "Xác định và đo lường chi phí của từng phương án."
      }
    ],
    "answer": "c",
    "explanation": "Theo trình tự được hỏi trong đề, bước 3 là xác định và đo lường kết quả/hiệu quả của từng phương án. Lưu ý: bộ slide đính kèm chỉ giới thiệu các loại phân tích kinh tế y tế, không trình bày chi tiết trình tự này, nên đáp án được đối chiếu theo câu hỏi trong đề.",
    "source": "Đề K21 · mã đề 002, câu 35, trang đề 7/11; đối chiếu khái quát: (SLIDE) Chương 1, PDF tr. 43–44 (các phương pháp đánh giá kinh tế y tế)."
  },
  {
    "id": "k21-42",
    "topic": "Chi phí trung bình",
    "question": "Nếu tổng chi phí của hoạt động điều trị là 170 triệu đồng và tạo ra 1.200 ngày-giường, chi phí trung bình trên mỗi ngày-giường xấp xỉ bao nhiêu?",
    "options": [
      {
        "id": "a",
        "text": "141.667 đồng."
      },
      {
        "id": "b",
        "text": "170.000 đồng."
      },
      {
        "id": "c",
        "text": "204.000 đồng."
      },
      {
        "id": "d",
        "text": "245.000 đồng."
      }
    ],
    "answer": "a",
    "explanation": "Chi phí trung bình = tổng chi phí ÷ số lượng dịch vụ = 170.000.000 ÷ 1.200 = 141.666,7 đồng/ngày-giường, làm tròn khoảng 141.667 đồng.",
    "source": "Câu luyện tập bổ sung từ phương pháp trong slide; đối chiếu: Phân tích chi phí kinh tế trong y tế, PDF tr. 20–21 (số lượng dịch vụ và chi phí trung bình)."
  },
  {
    "id": "k21-43",
    "topic": "Phân bổ chi phí",
    "question": "Trong phân bổ chi phí từng bước, đặc điểm nào mô tả đúng phương pháp này nhất?",
    "options": [
      {
        "id": "a",
        "text": "Chỉ phân bổ chi phí của hoạt động trực tiếp cho chính hoạt động đó."
      },
      {
        "id": "b",
        "text": "Phân bổ chi phí giữa các hoạt động gián tiếp theo trình tự, trước khi phân bổ các chi phí này cho hoạt động trực tiếp."
      },
      {
        "id": "c",
        "text": "Không phân bổ bất kỳ chi phí gián tiếp nào."
      },
      {
        "id": "d",
        "text": "Tất cả chi phí gián tiếp luôn chia đều cho từng người bệnh."
      }
    ],
    "answer": "b",
    "explanation": "Phân bổ từng bước phân phối chi phí các hoạt động gián tiếp theo một trình tự đã chọn, bao gồm việc phân bổ sang các hoạt động khác trước khi tổng hợp chi phí cho các hoạt động trực tiếp.",
    "source": "Câu luyện tập bổ sung từ sơ đồ phân bổ chi phí; đối chiếu: Phân tích chi phí kinh tế trong y tế, PDF tr. 17–19."
  },
  {
    "id": "k21-44",
    "topic": "Chi phí trực tiếp ngoài y tế",
    "question": "Khoản nào dưới đây là chi phí vật chất trực tiếp ngoài y tế của người sử dụng dịch vụ y tế?",
    "options": [
      {
        "id": "a",
        "text": "Tiền xét nghiệm máu tại bệnh viện."
      },
      {
        "id": "b",
        "text": "Tiền thuốc do cơ sở y tế cấp."
      },
      {
        "id": "c",
        "text": "Tiền ăn uống và đi lại phát sinh do đi khám/điều trị."
      },
      {
        "id": "d",
        "text": "Chi phí sử dụng giường bệnh."
      }
    ],
    "answer": "c",
    "explanation": "Ăn uống, lưu trú và đi lại là chi phí vật chất trực tiếp ngoài cơ sở y tế. Xét nghiệm, thuốc và giường bệnh thuộc nhóm chi phí trực tiếp trong y tế.",
    "source": "Câu luyện tập bổ sung từ phân loại chi phí người sử dụng dịch vụ; đối chiếu: Phân tích chi phí kinh tế trong y tế, PDF tr. 7–9."
  },
  {
    "id": "k21-45",
    "topic": "Điều chỉnh chi phí theo CPI",
    "question": "Chi phí xét nghiệm máu năm 2018 là 250.000 đồng/lần. CPI năm 2018 là 354 và CPI năm 2022 là 315. Quy đổi chi phí năm 2018 về mặt bằng giá năm 2022 theo công thức CPI, kết quả xấp xỉ bao nhiêu?",
    "options": [
      {
        "id": "a",
        "text": "222.458 đồng."
      },
      {
        "id": "b",
        "text": "250.000 đồng."
      },
      {
        "id": "c",
        "text": "280.000 đồng."
      },
      {
        "id": "d",
        "text": "315.000 đồng."
      }
    ],
    "answer": "a",
    "explanation": "Theo công thức quy đổi chi phí quá khứ về hiện tại: chi phí quy đổi = 250.000 × (315/354) ≈ 222.458 đồng. Đây là giá trị quy đổi theo các CPI đã cho trong câu hỏi.",
    "source": "Câu luyện tập bổ sung theo ví dụ CPI trong slide; đối chiếu: Phân tích chi phí kinh tế trong y tế, PDF tr. 22–23."
  },
  {
    "id": "k21-46",
    "topic": "Chiết khấu",
    "question": "Một khoản chi dự kiến phát sinh sau 2 năm là 1.210.000 đồng. Nếu tỷ lệ chiết khấu là 10%/năm, giá trị hiện tại của khoản chi xấp xỉ bao nhiêu?",
    "options": [
      {
        "id": "a",
        "text": "1.000.000 đồng."
      },
      {
        "id": "b",
        "text": "1.100.000 đồng."
      },
      {
        "id": "c",
        "text": "1.210.000 đồng."
      },
      {
        "id": "d",
        "text": "1.331.000 đồng."
      }
    ],
    "answer": "a",
    "explanation": "Giá trị hiện tại = 1.210.000/(1 + 0,10)^2 = 1.210.000/1,21 = 1.000.000 đồng. Chiết khấu đưa giá trị tương lai về thời điểm hiện tại.",
    "source": "Câu luyện tập bổ sung theo công thức chiết khấu; đối chiếu: Phân tích chi phí kinh tế trong y tế, PDF tr. 24–25."
  },
  {
    "id": "k21-47",
    "topic": "Phương pháp lập kế hoạch tài chính",
    "question": "Đặc điểm nào đúng với phương pháp lập kế hoạch tài chính từ trên xuống (Top-down)?",
    "options": [
      {
        "id": "a",
        "text": "Mỗi nhân viên tự lập dự toán chi tiết rồi cộng lại, không có ước tính tổng thể."
      },
      {
        "id": "b",
        "text": "Cấp quản lý ước tính ngân sách tổng thể trước, sau đó phân chia cho các công việc nhỏ hơn."
      },
      {
        "id": "c",
        "text": "Chỉ dựa vào hóa đơn thực tế của năm trước, không cần xem kế hoạch mới."
      },
      {
        "id": "d",
        "text": "Không phân bổ ngân sách theo các công việc hoặc hoạt động."
      }
    ],
    "answer": "b",
    "explanation": "Trong phương pháp Top-down, nhà quản lý cấp cao ước tính tổng chi phí trước rồi phân bổ dự toán cho các phần việc nhỏ hơn hoặc các tiểu dự án.",
    "source": "Câu luyện tập bổ sung theo bài giảng; đối chiếu: Lập kế hoạch tài chính y tế, PDF tr. 12."
  },
  {
    "id": "k21-48",
    "topic": "Phương pháp lập kế hoạch tài chính",
    "question": "Đặc điểm nào đúng với phương pháp lập kế hoạch tài chính từ dưới lên (Bottom-up)?",
    "options": [
      {
        "id": "a",
        "text": "Bắt đầu từ tổng ngân sách do cấp cao ấn định rồi chia xuống."
      },
      {
        "id": "b",
        "text": "Bỏ qua chi phí nhân công, vật tư và thiết bị."
      },
      {
        "id": "c",
        "text": "Xác định và ước tính chi phí của từng yếu tố/công việc, sau đó tổng hợp thành ngân sách chung."
      },
      {
        "id": "d",
        "text": "Chỉ lập kế hoạch sau khi kết thúc chương trình."
      }
    ],
    "answer": "c",
    "explanation": "Bottom-up bắt đầu bằng việc xác định các yếu tố cấu thành chi phí ở cấp công việc, định lượng và quy thành tiền, rồi tổng hợp ngân sách của các công việc để ước tính tổng chi phí.",
    "source": "Câu luyện tập bổ sung theo bài giảng; đối chiếu: Lập kế hoạch tài chính y tế, PDF tr. 13."
  },
  {
    "id": "k21-49",
    "topic": "Chi phí cơ hội",
    "question": "Định nghĩa nào mô tả đúng nhất chi phí cơ hội?",
    "options": [
      {
        "id": "a",
        "text": "Toàn bộ khoản tiền ghi trên hóa đơn của phương án được chọn."
      },
      {
        "id": "b",
        "text": "Tổng chi phí kế toán cộng với thuế phải nộp."
      },
      {
        "id": "c",
        "text": "Lợi ích của phương án tốt nhất bị bỏ lỡ khi lựa chọn một phương án khác."
      },
      {
        "id": "d",
        "text": "Khoản chi phí phát sinh bất kể có lựa chọn hay không."
      }
    ],
    "answer": "c",
    "explanation": "Chi phí cơ hội là lợi ích gắn với lựa chọn thay thế tốt nhất mà người ra quyết định từ bỏ khi chọn phương án hiện tại. Nó không nhất thiết xuất hiện trên sổ sách kế toán.",
    "source": "Câu luyện tập bổ sung; đối chiếu: Phân tích chi phí kinh tế trong y tế, PDF tr. 5–6."
  },
  {
    "id": "k21-50",
    "topic": "Giám sát kế hoạch tài chính",
    "question": "Mục đích nào phù hợp với hoạt động theo dõi, giám sát thực hiện kế hoạch tài chính y tế?",
    "options": [
      {
        "id": "a",
        "text": "Kiểm tra việc thu – chi theo kế hoạch, dự báo thu – chi tương lai và phát hiện chênh lệch để điều chỉnh kịp thời."
      },
      {
        "id": "b",
        "text": "Chỉ tổng hợp số lượt khám bệnh, không xem xét chi tiêu."
      },
      {
        "id": "c",
        "text": "Chỉ đánh giá chất lượng chuyên môn của từng bác sĩ."
      },
      {
        "id": "d",
        "text": "Chỉ lập báo cáo vào cuối năm và không cần điều chỉnh."
      }
    ],
    "answer": "a",
    "explanation": "Theo dõi và giám sát nhằm bảo đảm tuân thủ kế hoạch thu – chi, dự báo tài chính, phát hiện khác biệt giữa thực tế và dự toán, từ đó điều chỉnh kịp thời và nâng hiệu quả sử dụng nguồn lực.",
    "source": "Câu luyện tập bổ sung theo bài giảng; đối chiếu: Lập kế hoạch tài chính y tế, PDF tr. 23."
  },
  {
    "id": "extra-001",
    "topic": "Phân tích chi phí",
    "question": "Một dịch vụ tư vấn dinh dưỡng có chi phí phòng tư vấn, bàn ghế, lương nhân viên và tờ rơi. Nếu chỉ tính các khoản chi để tổ chức và cung cấp dịch vụ, đây là quan điểm chi phí của ai?",
    "options": [
      {
        "id": "a",
        "text": "Người sử dụng dịch vụ y tế"
      },
      {
        "id": "b",
        "text": "Người cung cấp dịch vụ y tế"
      },
      {
        "id": "c",
        "text": "Toàn xã hội bao gồm mọi chi phí ngoài y tế"
      },
      {
        "id": "d",
        "text": "Chỉ cơ quan bảo hiểm y tế"
      }
    ],
    "answer": "b",
    "explanation": "Các đầu vào như phòng, trang thiết bị, nhân sự và tài liệu được xem xét từ phía đơn vị tổ chức cung cấp dịch vụ. Góc nhìn xã hội còn tính cả các chi phí của người bệnh và cộng đồng.",
    "source": "FILE ÔN TẬP.zip → ÔN-TẬP-QUẢN-LÝ-Y-TẾ.pdf, PDF tr. 1; đối chiếu: PHÂN TÍCH CHI PHÍ KINH TẾ TRONG Y TẾ.pdf, phần phân loại chi phí."
  },
  {
    "id": "extra-002",
    "topic": "Phân tích chi phí",
    "question": "Chi phí xây dựng một phòng thủ thuật được phân loại phù hợp nhất là:",
    "options": [
      {
        "id": "a",
        "text": "Chi phí biến đổi và chi phí thường xuyên"
      },
      {
        "id": "b",
        "text": "Chi phí cố định và chi phí thường xuyên"
      },
      {
        "id": "c",
        "text": "Chi phí cố định và chi phí đầu tư"
      },
      {
        "id": "d",
        "text": "Chi phí biến đổi và chi phí đầu tư"
      }
    ],
    "answer": "c",
    "explanation": "Phòng xây dựng là tài sản sử dụng trong nhiều năm nên thuộc chi phí đầu tư; nhu cầu xây dựng không thay đổi theo từng lượt khám nên thường được xem là chi phí cố định.",
    "source": "FILE ÔN TẬP.zip → ÔN-TẬP-QUẢN-LÝ-Y-TẾ.pdf, PDF tr. 1; đối chiếu: PHÂN TÍCH CHI PHÍ KINH TẾ TRONG Y TẾ.pdf, phần phân loại chi phí."
  },
  {
    "id": "extra-003",
    "topic": "Phân tích chi phí",
    "question": "Tờ rơi hướng dẫn dinh dưỡng được sử dụng 200 tờ mỗi tháng. Khoản này thường được phân loại là:",
    "options": [
      {
        "id": "a",
        "text": "Chi phí cố định và chi phí đầu tư"
      },
      {
        "id": "b",
        "text": "Chi phí biến đổi và chi phí đầu tư"
      },
      {
        "id": "c",
        "text": "Chi phí biến đổi và chi phí thường xuyên"
      },
      {
        "id": "d",
        "text": "Chi phí cố định và chi phí thường xuyên"
      }
    ],
    "answer": "c",
    "explanation": "Tờ rơi là vật tư tiêu hao, được mua liên tục và số lượng sử dụng thường tăng giảm theo số người cần tư vấn; vì vậy đây là chi phí thường xuyên, thường biến đổi theo khối lượng dịch vụ.",
    "source": "FILE ÔN TẬP.zip → ÔN-TẬP-QUẢN-LÝ-Y-TẾ.pdf, PDF tr. 1; đối chiếu: PHÂN TÍCH CHI PHÍ KINH TẾ TRONG Y TẾ.pdf, PDF tr. 7–11."
  },
  {
    "id": "extra-004",
    "topic": "Phân tích chi phí",
    "question": "Bàn ghế và dụng cụ trực quan có thời hạn sử dụng 10 năm. Khoản mua ban đầu thường được xếp vào:",
    "options": [
      {
        "id": "a",
        "text": "Chi phí cố định và chi phí thường xuyên"
      },
      {
        "id": "b",
        "text": "Chi phí cố định và chi phí đầu tư"
      },
      {
        "id": "c",
        "text": "Chi phí biến đổi và chi phí thường xuyên"
      },
      {
        "id": "d",
        "text": "Chi phí biến đổi và chi phí đầu tư"
      }
    ],
    "answer": "b",
    "explanation": "Trang thiết bị sử dụng qua nhiều năm là chi phí đầu tư; nhu cầu có bộ bàn ghế không tăng trực tiếp theo từng lượt tư vấn nên thường xếp vào nhóm cố định.",
    "source": "FILE ÔN TẬP.zip → ÔN-TẬP-QUẢN-LÝ-Y-TẾ.pdf, PDF tr. 1–2; đối chiếu: PHÂN TÍCH CHI PHÍ KINH TẾ TRONG Y TẾ.pdf."
  },
  {
    "id": "extra-005",
    "topic": "Phân tích chi phí",
    "question": "Tiền lương tháng của một nhân viên tư vấn làm việc cố định tại trạm y tế thường được xem là:",
    "options": [
      {
        "id": "a",
        "text": "Chi phí cố định và chi phí thường xuyên"
      },
      {
        "id": "b",
        "text": "Chi phí cố định và chi phí đầu tư"
      },
      {
        "id": "c",
        "text": "Chi phí biến đổi và chi phí đầu tư"
      },
      {
        "id": "d",
        "text": "Chi phí biến đổi và chi phí vốn"
      }
    ],
    "answer": "a",
    "explanation": "Lương là khoản chi lặp lại để duy trì hoạt động, nên thuộc chi phí thường xuyên. Với biên chế cố định, khoản lương trong kỳ không thay đổi theo từng lượt tư vấn.",
    "source": "FILE ÔN TẬP.zip → ÔN-TẬP-QUẢN-LÝ-Y-TẾ.pdf, PDF tr. 1–2; đối chiếu: PHÂN TÍCH CHI PHÍ KINH TẾ TRONG Y TẾ.pdf."
  },
  {
    "id": "extra-006",
    "topic": "Phân tích chi phí",
    "question": "Chi phí kinh tế của một hoạt động thường được xác định bằng:",
    "options": [
      {
        "id": "a",
        "text": "Chỉ chi phí ghi trong sổ kế toán"
      },
      {
        "id": "b",
        "text": "Chi phí kế toán cộng chi phí cơ hội"
      },
      {
        "id": "c",
        "text": "Chỉ chi phí cơ hội, không tính khoản chi thực tế"
      },
      {
        "id": "d",
        "text": "Doanh thu trừ lợi nhuận"
      }
    ],
    "answer": "b",
    "explanation": "Chi phí kinh tế tính cả khoản chi phí kế toán phát sinh và giá trị cơ hội tốt nhất bị bỏ qua khi sử dụng nguồn lực cho hoạt động này.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 1; ĐỀ K18.pdf, PDF tr. 1; đối chiếu: PHÂN TÍCH CHI PHÍ KINH TẾ TRONG Y TẾ.pdf, PDF tr. 5–6."
  },
  {
    "id": "extra-007",
    "topic": "Phân tích chi phí",
    "question": "Bạn chọn phương án 1 và từ bỏ phương án 2. Giá trị lợi ích tốt nhất của phương án bị từ bỏ được gọi là:",
    "options": [
      {
        "id": "a",
        "text": "Chi phí biên"
      },
      {
        "id": "b",
        "text": "Chi phí cơ hội"
      },
      {
        "id": "c",
        "text": "Chi phí biến đổi"
      },
      {
        "id": "d",
        "text": "Chi phí vô hình"
      }
    ],
    "answer": "b",
    "explanation": "Chi phí cơ hội là giá trị của phương án thay thế tốt nhất mà người ra quyết định không chọn.",
    "source": "FILE ÔN TẬP.zip → ÔN-TẬP-QUẢN-LÝ-Y-TẾ.pdf, PDF tr. 8–10; đối chiếu: PHÂN TÍCH CHI PHÍ KINH TẾ TRONG Y TẾ.pdf, PDF tr. 5–6."
  },
  {
    "id": "extra-008",
    "topic": "Phân tích chi phí",
    "question": "Một dự án dự kiến cần chi 100.000.000 đồng vào cuối năm thứ hai. Với hệ số chiết khấu 5%/năm, giá trị hiện tại xấp xỉ là:",
    "options": [
      {
        "id": "a",
        "text": "100.000.000 đồng"
      },
      {
        "id": "b",
        "text": "95.238.095 đồng"
      },
      {
        "id": "c",
        "text": "90.702.948 đồng"
      },
      {
        "id": "d",
        "text": "86.383.760 đồng"
      }
    ],
    "answer": "c",
    "explanation": "Giá trị hiện tại = 100.000.000/(1,05)^2 ≈ 90.702.948 đồng.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 23; ÔN-TẬP-QUẢN-LÝ-Y-TẾ.pdf, PDF tr. 5–6; đối chiếu: PHÂN TÍCH CHI PHÍ KINH TẾ TRONG Y TẾ.pdf, PDF tr. 24–25."
  },
  {
    "id": "extra-009",
    "topic": "Phân tích chi phí",
    "question": "Một phòng khám xây dựng hết 500 triệu đồng và sử dụng trong 30 năm. Nếu chỉ phân bổ đều chi phí đầu tư, chi phí vốn hằng năm là:",
    "options": [
      {
        "id": "a",
        "text": "10.000.000 đồng"
      },
      {
        "id": "b",
        "text": "15.000.000 đồng"
      },
      {
        "id": "c",
        "text": "20.000.000 đồng"
      },
      {
        "id": "d",
        "text": "16.666.667 đồng"
      }
    ],
    "answer": "d",
    "explanation": "Phân bổ đều theo thời gian sử dụng: 500.000.000/30 ≈ 16.666.667 đồng mỗi năm. Cách tính này chưa tính lãi suất/chiết khấu.",
    "source": "FILE ÔN TẬP.zip → ÔN-TẬP-QUẢN-LÝ-Y-TẾ.pdf, PDF tr. 4–5; Print 2.pdf, PDF tr. 23; đối chiếu: PHÂN TÍCH CHI PHÍ KINH TẾ TRONG Y TẾ.pdf."
  },
  {
    "id": "extra-010",
    "topic": "Phân tích chi phí",
    "question": "Một phòng khám có nguyên giá 500 triệu đồng, thời hạn 30 năm và suất chiết khấu 3%/năm. Chi phí vốn quy đổi hằng năm theo phương pháp niên kim gần nhất là:",
    "options": [
      {
        "id": "a",
        "text": "16.666.667 đồng"
      },
      {
        "id": "b",
        "text": "25.509.630 đồng"
      },
      {
        "id": "c",
        "text": "42.176.296 đồng"
      },
      {
        "id": "d",
        "text": "21.088.148 đồng"
      }
    ],
    "answer": "b",
    "explanation": "Phương pháp niên kim quy đổi vốn đầu tư thành khoản chi đều hằng năm có tính đến suất chiết khấu; với các dữ kiện nêu ra, kết quả gần 25,51 triệu đồng/năm.",
    "source": "FILE ÔN TẬP.zip → ÔN-TẬP-QUẢN-LÝ-Y-TẾ.pdf, PDF tr. 4–5; Print 2.pdf, PDF tr. 23; cần phân biệt với phép chia đều nguyên giá cho số năm sử dụng."
  },
  {
    "id": "extra-011",
    "topic": "Phân tích chi phí",
    "question": "Công thức tổng quát để tính chi phí biên khi sản lượng tăng từ N1 lên N2 là:",
    "options": [
      {
        "id": "a",
        "text": "(Tổng chi phí mới − tổng chi phí cũ)/(N2 − N1)"
      },
      {
        "id": "b",
        "text": "Tổng chi phí mới + tổng chi phí cũ"
      },
      {
        "id": "c",
        "text": "Chi phí cố định + chi phí biến đổi"
      },
      {
        "id": "d",
        "text": "Tổng chi phí mới/số nhân viên"
      }
    ],
    "answer": "a",
    "explanation": "Chi phí biên là phần chi phí tăng thêm chia cho số đơn vị sản phẩm tăng thêm: MC = (TC2 − TC1)/(N2 − N1).",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 3 và 25; ĐỀ K18.pdf, PDF tr. 3; đối chiếu: PHÂN TÍCH CHI PHÍ KINH TẾ TRONG Y TẾ.pdf, phần chi phí."
  },
  {
    "id": "extra-012",
    "topic": "Phân tích chi phí",
    "question": "Tổng chi phí tầm soát 400 ca là 900 đơn vị tiền; tổng chi phí 500 ca là 1.400 đơn vị tiền. Chi phí biên cho mỗi ca tăng thêm là:",
    "options": [
      {
        "id": "a",
        "text": "4 đơn vị tiền"
      },
      {
        "id": "b",
        "text": "5 đơn vị tiền"
      },
      {
        "id": "c",
        "text": "6 đơn vị tiền"
      },
      {
        "id": "d",
        "text": "7 đơn vị tiền"
      }
    ],
    "answer": "b",
    "explanation": "Chi phí tăng thêm = 1.400 − 900 = 500; số ca tăng thêm = 500 − 400 = 100. Chi phí biên = 500/100 = 5 đơn vị tiền/ca.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 25; ÔN-TẬP-QUẢN-LÝ-Y-TẾ.pdf, PDF tr. 8–10."
  },
  {
    "id": "extra-013",
    "topic": "Phân tích chi phí",
    "question": "Trong một bảng chi phí gồm nằm viện (5 ngày × 500.000 đồng), xét nghiệm (2 lần × 250.000 đồng) và thuốc (2 đơn vị × 1.500.000 đồng), tổng chi phí vật chất trực tiếp trong y tế là:",
    "options": [
      {
        "id": "a",
        "text": "3 triệu đồng"
      },
      {
        "id": "b",
        "text": "5 triệu đồng"
      },
      {
        "id": "c",
        "text": "6 triệu đồng"
      },
      {
        "id": "d",
        "text": "8 triệu đồng"
      }
    ],
    "answer": "c",
    "explanation": "Nằm viện: 2,5 triệu; xét nghiệm: 0,5 triệu; thuốc: 3 triệu. Tổng cộng = 6 triệu đồng.",
    "source": "FILE ÔN TẬP.zip → YDP 2025.pdf, PDF tr. 5/11 (trang scan 4); đáp án được kiểm tra bằng cách nhân số lượng với đơn giá từng khoản."
  },
  {
    "id": "extra-014",
    "topic": "Phân tích chi phí",
    "question": "Theo bảng chi phí có suất ăn (5 × 200.000 đồng), taxi (4 × 300.000 đồng) và chi phí khác (5 × 200.000 đồng), tổng chi phí vật chất trực tiếp ngoài y tế là:",
    "options": [
      {
        "id": "a",
        "text": "2,5 triệu đồng"
      },
      {
        "id": "b",
        "text": "3,5 triệu đồng"
      },
      {
        "id": "c",
        "text": "3,2 triệu đồng"
      },
      {
        "id": "d",
        "text": "4 triệu đồng"
      }
    ],
    "answer": "c",
    "explanation": "Suất ăn = 1.000.000; taxi = 1.200.000; chi phí khác = 1.000.000. Tổng cộng = 3.200.000 đồng.",
    "source": "FILE ÔN TẬP.zip → YDP 2025.pdf, PDF tr. 5/11 (trang scan 4); dữ kiện được đọc từ bảng trong đề."
  },
  {
    "id": "extra-016",
    "topic": "Phân tích chi phí",
    "question": "Trong cùng bảng chi phí nằm viện, xét nghiệm, thuốc, suất ăn, xe cấp cứu bệnh viện và xe Grab/taxi, khoản nào là chi phí trực tiếp ngoài y tế?",
    "options": [
      {
        "id": "a",
        "text": "Xe Grab/taxi"
      },
      {
        "id": "b",
        "text": "Thuốc"
      },
      {
        "id": "c",
        "text": "Xét nghiệm máu"
      },
      {
        "id": "d",
        "text": "Xe cấp cứu bệnh viện"
      }
    ],
    "answer": "a",
    "explanation": "Chi phí đi lại bằng taxi/xe công nghệ là chi phí trực tiếp ngoài y tế; thuốc, xét nghiệm và xe cấp cứu y tế thuộc nhóm trực tiếp trong y tế theo bảng của đề.",
    "source": "FILE ÔN TẬP.zip → YDP 2025.pdf, PDF tr. 6/11 (trang scan 5); đối chiếu: PHÂN TÍCH CHI PHÍ KINH TẾ TRONG Y TẾ.pdf, phần chi phí người bệnh."
  },
  {
    "id": "extra-017",
    "topic": "Phân tích chi phí",
    "question": "Khi phân bổ chi phí nhà ăn cho các khoa/phòng, tiêu chí phù hợp nhất thường là:",
    "options": [
      {
        "id": "a",
        "text": "Diện tích phòng"
      },
      {
        "id": "b",
        "text": "Số nhân viên"
      },
      {
        "id": "c",
        "text": "Số bữa ăn được phục vụ"
      },
      {
        "id": "d",
        "text": "Tổng chi phí của từng khoa"
      }
    ],
    "answer": "c",
    "explanation": "Số bữa ăn phản ánh mức sử dụng dịch vụ nhà ăn của từng bộ phận trực tiếp hơn các tiêu chí như diện tích hoặc tổng chi phí.",
    "source": "FILE ÔN TẬP.zip → ÔN-TẬP-QUẢN-LÝ-Y-TẾ.pdf, PDF tr. 3–4; Print 2.pdf, PDF tr. 22–23; đối chiếu: PHÂN TÍCH CHI PHÍ KINH TẾ TRONG Y TẾ.pdf, PDF tr. 14–19."
  },
  {
    "id": "extra-018",
    "topic": "Phân tích chi phí",
    "question": "Khi phân bổ chi phí của phòng kế toán cho các khoa/phòng còn lại, tiêu chí nào thường phù hợp nhất trong các lựa chọn của đề?",
    "options": [
      {
        "id": "a",
        "text": "Số nhân viên"
      },
      {
        "id": "b",
        "text": "Số bữa ăn"
      },
      {
        "id": "c",
        "text": "Diện tích"
      },
      {
        "id": "d",
        "text": "Số lượt xe cấp cứu"
      }
    ],
    "answer": "a",
    "explanation": "Số nhân viên là tiêu chí phân bổ thường dùng trong bài tập này vì khối lượng công việc kế toán thường gắn với quy mô nhân sự; trong thực tế nên chọn tiêu thức phản ánh quan hệ nhân quả của chi phí.",
    "source": "FILE ÔN TẬP.zip → ÔN-TẬP-QUẢN-LÝ-Y-TẾ.pdf, PDF tr. 3–4; Print 2.pdf, PDF tr. 22–23; đối chiếu: PHÂN TÍCH CHI PHÍ KINH TẾ TRONG Y TẾ.pdf, PDF tr. 14–19."
  },
  {
    "id": "extra-019",
    "topic": "Phân tích chi phí",
    "question": "Chi phí thường xuyên của một cơ sở điều trị tiêu chảy thường bao gồm tổ hợp nào sau đây?",
    "options": [
      {
        "id": "a",
        "text": "Xây dựng phòng khám và mua trang thiết bị"
      },
      {
        "id": "b",
        "text": "Lương nhân viên, thuốc, hóa chất, điện nước, bảo dưỡng và quản lý"
      },
      {
        "id": "c",
        "text": "Chỉ tiền ăn, trọ và đi lại của bệnh nhân"
      },
      {
        "id": "d",
        "text": "Chỉ chi phí xây dựng công trình"
      }
    ],
    "answer": "b",
    "explanation": "Chi phí thường xuyên gồm những khoản cần chi lặp lại để vận hành dịch vụ như lương, thuốc, hóa chất, điện nước, duy trì/bảo dưỡng và quản lý. Xây dựng công trình và mua trang thiết bị lớn thuộc chi phí đầu tư.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 23–24; ÔN-TẬP-QUẢN-LÝ-Y-TẾ.pdf, PDF tr. 5–7; đối chiếu: PHÂN TÍCH CHI PHÍ KINH TẾ TRONG Y TẾ.pdf."
  },
  {
    "id": "extra-020",
    "topic": "Phân tích chi phí",
    "question": "Chi phí vốn để cung cấp dịch vụ điều trị tiêu chảy tại phòng khám chủ yếu gồm:",
    "options": [
      {
        "id": "a",
        "text": "Xây dựng phòng khám và mua trang thiết bị"
      },
      {
        "id": "b",
        "text": "Lương, thuốc và điện nước"
      },
      {
        "id": "c",
        "text": "Tiền ăn, trọ và đi lại của người bệnh"
      },
      {
        "id": "d",
        "text": "Chi phí mất thu nhập do nghỉ việc"
      }
    ],
    "answer": "a",
    "explanation": "Chi phí vốn là khoản đầu tư cho tài sản sử dụng nhiều kỳ, chẳng hạn xây dựng cơ sở và mua trang thiết bị. Các khoản vận hành và chi phí người bệnh thuộc nhóm khác.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 23; ÔN-TẬP-QUẢN-LÝ-Y-TẾ.pdf, PDF tr. 5–7; đối chiếu: PHÂN TÍCH CHI PHÍ KINH TẾ TRONG Y TẾ.pdf."
  },
  {
    "id": "extra-021",
    "topic": "Phân tích chi phí",
    "question": "Chi phí biến đổi của một dịch vụ thường phụ thuộc trực tiếp nhất vào yếu tố nào?",
    "options": [
      {
        "id": "a",
        "text": "Quy mô sản xuất/cung cấp dịch vụ"
      },
      {
        "id": "b",
        "text": "Tuổi thọ của tòa nhà"
      },
      {
        "id": "c",
        "text": "Khoản đầu tư đã thực hiện trong quá khứ"
      },
      {
        "id": "d",
        "text": "Tên gọi của đơn vị cung cấp"
      }
    ],
    "answer": "a",
    "explanation": "Chi phí biến đổi thường tăng hoặc giảm theo khối lượng dịch vụ được cung cấp, như thuốc và vật tư tiêu hao theo số ca điều trị.",
    "source": "FILE ÔN TẬP.zip → ÔN-TẬP-QUẢN-LÝ-Y-TẾ.pdf, PDF tr. 9–10; Print 2.pdf, PDF tr. 25; đối chiếu: PHÂN TÍCH CHI PHÍ KINH TẾ TRONG Y TẾ.pdf."
  },
  {
    "id": "extra-022",
    "topic": "Phân tích chi phí",
    "question": "Khoản nào sau đây là chi phí gián tiếp do bệnh tật, thay vì chi phí trực tiếp ngoài y tế?",
    "options": [
      {
        "id": "a",
        "text": "Tiền ăn trong thời gian điều trị"
      },
      {
        "id": "b",
        "text": "Tiền trọ gần bệnh viện"
      },
      {
        "id": "c",
        "text": "Tiền đi lại đến cơ sở khám chữa bệnh"
      },
      {
        "id": "d",
        "text": "Thu nhập bị mất do phải nghỉ việc"
      }
    ],
    "answer": "d",
    "explanation": "Mất thu nhập hoặc năng suất lao động do nghỉ việc thường được xếp vào chi phí gián tiếp. Ăn uống, trọ và đi lại là các chi phí trực tiếp ngoài y tế.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 3 và 24; ĐỀ K18.pdf, PDF tr. 27; đối chiếu: PHÂN TÍCH CHI PHÍ KINH TẾ TRONG Y TẾ.pdf, PDF tr. 7–11."
  },
  {
    "id": "extra-023",
    "topic": "Phân tích chi phí",
    "question": "Chi phí phục hồi chức năng được chỉ định để điều trị bệnh thường được xếp vào nhóm nào?",
    "options": [
      {
        "id": "a",
        "text": "Chi phí trực tiếp cho điều trị"
      },
      {
        "id": "b",
        "text": "Chi phí trực tiếp ngoài y tế"
      },
      {
        "id": "c",
        "text": "Chi phí gián tiếp"
      },
      {
        "id": "d",
        "text": "Chi phí đầu tư cố định"
      }
    ],
    "answer": "a",
    "explanation": "Khi phục hồi chức năng là một phần của quá trình điều trị, khoản chi đó là chi phí trực tiếp cho chăm sóc/điều trị. Cách phân loại cụ thể có thể phụ thuộc phạm vi nghiên cứu.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 27; đối chiếu: PHÂN TÍCH CHI PHÍ KINH TẾ TRONG Y TẾ.pdf, PDF tr. 7–11."
  },
  {
    "id": "extra-024",
    "topic": "Phân tích chi phí",
    "question": "Một bảng phân bổ có tổng chi phí sau phân bổ cho khám bệnh và điều trị, cùng sản lượng 1.200 và 1.500 ngày-giường. Theo đáp án đã đánh dấu trong bản scan, tổng chi phí trung bình hai hoạt động là:",
    "options": [
      {
        "id": "a",
        "text": "267.276 đồng"
      },
      {
        "id": "b",
        "text": "257.000 đồng"
      },
      {
        "id": "c",
        "text": "247.106 đồng"
      },
      {
        "id": "d",
        "text": "227.215 đồng"
      }
    ],
    "answer": "a",
    "explanation": "Đáp án A được khoanh trong bản scan. Bài yêu cầu cộng chi phí trung bình của từng hoạt động sau phân bổ; do bảng có chữ số nhỏ và ghi chú viết tay, hãy đối chiếu trực tiếp bảng gốc nếu cần tái tính đến từng đồng.",
    "source": "FILE ÔN TẬP.zip → YDP 2025.pdf, PDF tr. 7/11 (trang scan 6); câu dựa trên bảng phân bổ chi phí có ghi chú tay nên đáp án được ghi theo lựa chọn đã đánh dấu trong bản scan."
  },
  {
    "id": "extra-025",
    "topic": "Phân tích chi phí",
    "question": "Chi phí kế toán khác với chi phí kinh tế ở điểm nào?",
    "options": [
      {
        "id": "a",
        "text": "Chi phí kế toán luôn bao gồm giá trị mọi cơ hội bị bỏ qua"
      },
      {
        "id": "b",
        "text": "Chi phí kế toán ghi nhận các khoản chi thực tế; chi phí kinh tế còn tính chi phí cơ hội"
      },
      {
        "id": "c",
        "text": "Chi phí kế toán không liên quan đến hoạt động đầu vào"
      },
      {
        "id": "d",
        "text": "Chi phí kinh tế chỉ là chi phí thể hiện trong sổ sách"
      }
    ],
    "answer": "b",
    "explanation": "Chi phí kế toán chủ yếu phản ánh khoản chi thực tế ghi nhận được. Phân tích chi phí kinh tế cộng thêm giá trị cơ hội bị bỏ qua khi sử dụng nguồn lực.",
    "source": "FILE ÔN TẬP.zip → ÔN-TẬP-QUẢN-LÝ-Y-TẾ.pdf, PDF tr. 9–10; Print 2.pdf, PDF tr. 1; đối chiếu: PHÂN TÍCH CHI PHÍ KINH TẾ TRONG Y TẾ.pdf, PDF tr. 5–6."
  },
  {
    "id": "extra-026",
    "topic": "Kinh tế học cơ bản",
    "question": "Khi nhu cầu của con người là vô hạn nhưng nguồn lực có hạn, xã hội buộc phải đối mặt trực tiếp với vấn đề nào?",
    "options": [
      {
        "id": "a",
        "text": "Sự lựa chọn"
      },
      {
        "id": "b",
        "text": "Lạm phát"
      },
      {
        "id": "c",
        "text": "Cạnh tranh hoàn hảo"
      },
      {
        "id": "d",
        "text": "Phân phối thu nhập quốc dân בלבד"
      }
    ],
    "answer": "a",
    "explanation": "Khan hiếm khiến cá nhân và xã hội phải lựa chọn cách sử dụng nguồn lực, đồng thời chấp nhận những cơ hội bị bỏ qua.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 1; ĐỀ K18.pdf, PDF tr. 1; đối chiếu: (SLIDE) Chương 1 ĐẠI CƯƠNG KINH TẾ Y TẾ.pdf, phần khái niệm kinh tế học."
  },
  {
    "id": "extra-027",
    "topic": "Kinh tế học cơ bản",
    "question": "Mục tiêu điển hình của kinh tế học thực chứng là:",
    "options": [
      {
        "id": "a",
        "text": "Đưa ra khuyến nghị dựa trên giá trị đạo đức cá nhân"
      },
      {
        "id": "b",
        "text": "Mô tả và giải thích điều gì xảy ra khi một yếu tố kinh tế thay đổi"
      },
      {
        "id": "c",
        "text": "Xác định điều xã hội bắt buộc phải lựa chọn"
      },
      {
        "id": "d",
        "text": "Đánh giá một chính sách là tốt hay xấu theo quan điểm cá nhân"
      }
    ],
    "answer": "b",
    "explanation": "Kinh tế học thực chứng giải thích và dự báo các hiện tượng kinh tế theo mối quan hệ có thể kiểm chứng; các khuyến nghị “nên làm gì” thuộc kinh tế học chuẩn tắc.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 2; ĐỀ K18.pdf, PDF tr. 1; đối chiếu: (SLIDE) Chương 1 ĐẠI CƯƠNG KINH TẾ Y TẾ.pdf, phần thực chứng và chuẩn tắc."
  },
  {
    "id": "extra-028",
    "topic": "Kinh tế học cơ bản",
    "question": "Phát biểu nào là ví dụ rõ nhất của kinh tế học chuẩn tắc?",
    "options": [
      {
        "id": "a",
        "text": "Lạm phát tăng 2 điểm phần trăm trong năm qua"
      },
      {
        "id": "b",
        "text": "Khi giá tăng, lượng cầu có xu hướng giảm nếu các yếu tố khác không đổi"
      },
      {
        "id": "c",
        "text": "Nhà nước nên đầu tư nhiều hơn cho y tế dự phòng thay vì chỉ tập trung điều trị"
      },
      {
        "id": "d",
        "text": "Khi thu nhập tăng, nhu cầu một số dịch vụ có thể thay đổi"
      }
    ],
    "answer": "c",
    "explanation": "Từ “nên” thể hiện một đánh giá/khuyến nghị chính sách, nên đây là mệnh đề chuẩn tắc thay vì chỉ mô tả thực tế.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 26; TCQLYT.pdf, PDF tr. 2–3 (ảnh chụp quiz); đối chiếu: (SLIDE) Chương 1 ĐẠI CƯƠNG KINH TẾ Y TẾ.pdf, phần kinh tế học chuẩn tắc."
  },
  {
    "id": "extra-029",
    "topic": "Kinh tế học cơ bản",
    "question": "Ví dụ nào sau đây thuộc phạm vi kinh tế học vi mô?",
    "options": [
      {
        "id": "a",
        "text": "Mức lạm phát toàn quốc trong năm tới"
      },
      {
        "id": "b",
        "text": "Tổng sản phẩm quốc nội tăng trưởng trong một quý"
      },
      {
        "id": "c",
        "text": "Các hộ gia đình có khuynh hướng sử dụng dịch vụ y tế tư nhân"
      },
      {
        "id": "d",
        "text": "Tổng thất nghiệp của cả nền kinh tế"
      }
    ],
    "answer": "c",
    "explanation": "Kinh tế học vi mô phân tích lựa chọn của cá nhân, hộ gia đình và doanh nghiệp; các chỉ số như GDP, lạm phát và thất nghiệp toàn quốc thuộc phạm vi vĩ mô.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 26; đối chiếu: (SLIDE) Chương 1 ĐẠI CƯƠNG KINH TẾ Y TẾ.pdf, phần vi mô và vĩ mô."
  },
  {
    "id": "extra-030",
    "topic": "Kinh tế học cơ bản",
    "question": "Chỉ số phổ biến dùng để đo lường giá trị sản phẩm cuối cùng được tạo ra trong phạm vi lãnh thổ một quốc gia là:",
    "options": [
      {
        "id": "a",
        "text": "Tổng sản phẩm quốc dân (GNP)"
      },
      {
        "id": "b",
        "text": "Tổng sản phẩm quốc nội (GDP)"
      },
      {
        "id": "c",
        "text": "Tổng sản phẩm xã hội"
      },
      {
        "id": "d",
        "text": "Tổng sản phẩm kinh tế"
      }
    ],
    "answer": "b",
    "explanation": "GDP đo giá trị sản phẩm cuối cùng được sản xuất trong phạm vi lãnh thổ kinh tế trong một thời kỳ. GNP liên quan đến thu nhập/sản phẩm gắn với các yếu tố thuộc về cư dân quốc gia.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 2; ĐỀ K18.pdf, PDF tr. 1–3; đối chiếu: (SLIDE) Chương 1 ĐẠI CƯƠNG KINH TẾ Y TẾ.pdf, PDF tr. 34–40."
  },
  {
    "id": "extra-035",
    "topic": "Kinh tế học cơ bản",
    "question": "Theo nghĩa cơ bản trong kinh tế học, thị trường là nơi:",
    "options": [
      {
        "id": "a",
        "text": "Người mua và người bán tương tác để trao đổi hàng hóa/dịch vụ"
      },
      {
        "id": "b",
        "text": "Chỉ các doanh nghiệp quảng cáo sản phẩm"
      },
      {
        "id": "c",
        "text": "Chỉ các cửa hàng bán lẻ cố định"
      },
      {
        "id": "d",
        "text": "Chỉ cơ quan nhà nước quyết định lượng sản xuất"
      }
    ],
    "answer": "a",
    "explanation": "Thị trường là cơ chế/không gian tương tác giữa người mua và người bán, qua đó hình thành trao đổi và các điều kiện giao dịch.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 2; ĐỀ K18.pdf, PDF tr. 1–2; đối chiếu: (SLIDE) Chương 1 ĐẠI CƯƠNG KINH TẾ Y TẾ.pdf."
  },
  {
    "id": "extra-036",
    "topic": "Bảo hiểm y tế",
    "question": "Lý do nào sau đây KHÔNG phải là nguyên nhân kinh tế trực tiếp làm phát sinh nhu cầu về cơ chế bảo hiểm y tế?",
    "options": [
      {
        "id": "a",
        "text": "Rủi ro ốm đau và chi phí điều trị khó dự đoán"
      },
      {
        "id": "b",
        "text": "Dịch vụ y tế có tính đặc biệt và nhu cầu có thể cấp bách"
      },
      {
        "id": "c",
        "text": "Cần chia sẻ rủi ro chi phí giữa nhiều người tham gia"
      },
      {
        "id": "d",
        "text": "Ngân sách nhà nước luôn luôn thiếu hụt trong mọi hoàn cảnh"
      }
    ],
    "answer": "d",
    "explanation": "Bảo hiểm y tế giúp chia sẻ rủi ro và giảm bất định tài chính khi ốm đau. Khẳng định ngân sách nhà nước luôn thiếu hụt là tuyệt đối hóa và không phải lý do nền tảng của bảo hiểm.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 1; ĐỀ K18.pdf, PDF tr. 1; đối chiếu: bài giảng KTYT không trình bày trực tiếp toàn bộ các mô hình lý giải này."
  },
  {
    "id": "extra-037",
    "topic": "Kinh tế y tế",
    "question": "Bác sĩ xác định người bệnh chỉ cần chụp X-quang thay vì chụp CT như người bệnh mong muốn. Trong kinh tế y tế, khái niệm phản ánh điều chuyên môn xác định là cần thiết là:",
    "options": [
      {
        "id": "a",
        "text": "Cầu"
      },
      {
        "id": "b",
        "text": "Cung"
      },
      {
        "id": "c",
        "text": "Nhu cầu (need)"
      },
      {
        "id": "d",
        "text": "Sở thích"
      }
    ],
    "answer": "c",
    "explanation": "“Cần”/need thường được xác định dựa trên đánh giá chuyên môn; “muốn” phản ánh điều người bệnh mong muốn còn “cầu” trong kinh tế còn gắn với khả năng chi trả.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 1; ÔN-TẬP-QUẢN-LÝ-Y-TẾ.pdf, PDF tr. 2–3; đối chiếu: (SLIDE) Chương 1 ĐẠI CƯƠNG KINH TẾ Y TẾ.pdf."
  },
  {
    "id": "extra-038",
    "topic": "Kinh tế y tế",
    "question": "Đặc điểm nào sau đây thường được xem là thất bại thị trường trong chăm sóc sức khỏe?",
    "options": [
      {
        "id": "a",
        "text": "Thông tin bất đối xứng giữa người cung cấp và người bệnh"
      },
      {
        "id": "b",
        "text": "Không chắc chắn về thời điểm và mức độ phát sinh bệnh tật"
      },
      {
        "id": "c",
        "text": "Ngoại tác do một người sử dụng dịch vụ gây ra cho sức khỏe người khác"
      },
      {
        "id": "d",
        "text": "Cả ba đặc điểm trên"
      }
    ],
    "answer": "d",
    "explanation": "Thị trường chăm sóc sức khỏe có thể có thông tin bất đối xứng, bất định và ngoại tác; các đặc điểm này làm thị trường hoạt động khác thị trường cạnh tranh hoàn hảo.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 27; TCQLYT.pdf, PDF tr. 4–12 (ảnh chụp quiz); đối chiếu: (SLIDE) Chương 1 ĐẠI CƯƠNG KINH TẾ Y TẾ.pdf, PDF tr. 52–55."
  },
  {
    "id": "extra-039",
    "topic": "Kinh tế y tế",
    "question": "Đặc điểm nào KHÔNG phù hợp với mô hình thị trường cạnh tranh hoàn hảo?",
    "options": [
      {
        "id": "a",
        "text": "Có nhiều người mua và người bán"
      },
      {
        "id": "b",
        "text": "Hàng hóa tương đối đồng nhất"
      },
      {
        "id": "c",
        "text": "Thông tin đầy đủ và không có rào cản gia nhập đáng kể"
      },
      {
        "id": "d",
        "text": "Hàng hóa công cộng có ngoại tác được thị trường tự cung cấp ở mức tối ưu trong mọi trường hợp"
      }
    ],
    "answer": "d",
    "explanation": "Hàng hóa công cộng và ngoại tác có thể khiến thị trường tự do không đạt mức cung ứng tối ưu, nên không thể xem đây là đặc điểm bảo đảm cạnh tranh hoàn hảo.",
    "source": "FILE ÔN TẬP.zip → ĐỀ K18.pdf, PDF tr. 27; đối chiếu: (SLIDE) Chương 1 ĐẠI CƯƠNG KINH TẾ Y TẾ.pdf, phần thất bại thị trường."
  },
  {
    "id": "extra-040",
    "topic": "Tài chính y tế",
    "question": "Trong công thức minh họa mức phí bảo hiểm K = P × C + M, ký hiệu M được dùng để chỉ:",
    "options": [
      {
        "id": "a",
        "text": "Mức độ bệnh nặng"
      },
      {
        "id": "b",
        "text": "Mức phí quản lý quỹ bảo hiểm"
      },
      {
        "id": "c",
        "text": "Số người tham gia bảo hiểm"
      },
      {
        "id": "d",
        "text": "Tỷ lệ người có khả năng chi trả"
      }
    ],
    "answer": "b",
    "explanation": "Theo công thức được ghi trong tài liệu ôn tập, P là xác suất ốm/sử dụng dịch vụ, C là chi phí điều trị một lần và M là phí quản lý quỹ.",
    "source": "FILE ÔN TẬP.zip → cô-Trang-ktyt.pdf, PDF tr. 1–2 (ảnh chụp quiz); công thức K = P × C + M cũng xuất hiện trong bài tập ôn tập."
  },
  {
    "id": "extra-041",
    "topic": "Mô hình tài chính y tế",
    "question": "Mô hình Bismarck thường được tài trợ chủ yếu thông qua:",
    "options": [
      {
        "id": "a",
        "text": "Thuế chung của toàn dân, không qua bảo hiểm"
      },
      {
        "id": "b",
        "text": "Đóng góp bảo hiểm xã hội từ người lao động và người sử dụng lao động"
      },
      {
        "id": "c",
        "text": "Chỉ tiền túi của bệnh nhân"
      },
      {
        "id": "d",
        "text": "Chỉ viện trợ quốc tế"
      }
    ],
    "answer": "b",
    "explanation": "Mô hình Bismarck dựa trên các quỹ bảo hiểm xã hội, thường được tài trợ bởi đóng góp của người lao động và người sử dụng lao động cùng các quy định của Nhà nước.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 15 và 20; đối chiếu: mô hình này không được trình bày trực tiếp trong sáu PDF slide đã gửi."
  },
  {
    "id": "extra-042",
    "topic": "Mô hình tài chính y tế",
    "question": "Theo bộ đề ôn tập, mô hình tài chính y tế Việt Nam trước thời kỳ Đổi mới thường được gắn với mô hình nào?",
    "options": [
      {
        "id": "a",
        "text": "Bismarck"
      },
      {
        "id": "b",
        "text": "Semashko"
      },
      {
        "id": "c",
        "text": "Beveridge hiện đại"
      },
      {
        "id": "d",
        "text": "Bảo hiểm tư nhân vì lợi nhuận"
      }
    ],
    "answer": "b",
    "explanation": "Bộ đề ôn tập gắn hệ thống tài chính y tế Việt Nam trước Đổi mới với mô hình Semashko, trong đó ngân sách nhà nước đóng vai trò chính. Đây là câu hỏi theo mốc lịch sử trong đề.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 20; đề ghi mốc trước năm 1986/1989 tùy câu, cần chú ý đúng mốc năm trong từng phiên bản."
  },
  {
    "id": "extra-043",
    "topic": "Bảo hiểm y tế",
    "question": "Trong các hình thức dưới đây, hình thức nào có cơ chế chia sẻ rủi ro tài chính thấp nhất?",
    "options": [
      {
        "id": "a",
        "text": "Bảo hiểm y tế xã hội"
      },
      {
        "id": "b",
        "text": "Bảo hiểm y tế cộng đồng"
      },
      {
        "id": "c",
        "text": "Bảo hiểm y tế tư nhân theo nguyên tắc chia sẻ rủi ro"
      },
      {
        "id": "d",
        "text": "Người bệnh tự trả trực tiếp từ tiền túi khi sử dụng dịch vụ"
      }
    ],
    "answer": "d",
    "explanation": "Thanh toán trực tiếp từ tiền túi không gộp rủi ro với một nhóm tham gia bảo hiểm; rủi ro chi phí chủ yếu thuộc về từng hộ gia đình.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 15–18; cô-Trang-ktyt.pdf, PDF tr. 2; khái niệm liên quan đến chia sẻ rủi ro trong bảo hiểm."
  },
  {
    "id": "extra-044",
    "topic": "Tài chính y tế",
    "question": "Tổng chi ngân sách nhà nước cho y tế, chi quỹ bảo hiểm xã hội và nguồn ODA dành cho y tế được xếp gần nhất vào:",
    "options": [
      {
        "id": "a",
        "text": "Chi công cho y tế"
      },
      {
        "id": "b",
        "text": "Chi tư cho y tế"
      },
      {
        "id": "c",
        "text": "Chỉ chi tiền túi hộ gia đình"
      },
      {
        "id": "d",
        "text": "Chỉ chi phí vốn của bệnh viện tư"
      }
    ],
    "answer": "a",
    "explanation": "Trong cách phân loại của đề, ngân sách nhà nước, quỹ bảo hiểm xã hội và nguồn viện trợ ODA thuộc các nguồn tài chính công cho y tế.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 24; đối chiếu: các slide đã gửi không trình bày trực tiếp công thức phân loại nguồn công này."
  },
  {
    "id": "extra-045",
    "topic": "Tài chính y tế",
    "question": "Nguồn tài chính y tế từ “tiền túi hộ gia đình” thường được gọi là:",
    "options": [
      {
        "id": "a",
        "text": "Ngân sách nhà nước"
      },
      {
        "id": "b",
        "text": "Chi tiêu trực tiếp ngoài cơ chế bảo hiểm"
      },
      {
        "id": "c",
        "text": "Tài trợ từ tổ chức từ thiện"
      },
      {
        "id": "d",
        "text": "Đóng góp của người sử dụng lao động vào quỹ xã hội"
      }
    ],
    "answer": "b",
    "explanation": "Đây là khoản hộ gia đình trực tiếp thanh toán khi sử dụng dịch vụ, không được gộp và chi trả thay thông qua cơ chế bảo hiểm.",
    "source": "FILE ÔN TẬP.zip → YDP 2025.pdf, PDF tr. 7/11 (trang scan 6); đối chiếu: chủ đề chi trả từ tiền túi trong đề K21."
  },
  {
    "id": "extra-046",
    "topic": "Thanh toán dịch vụ y tế",
    "question": "Một hạn chế điển hình của phương thức thanh toán theo phí dịch vụ là:",
    "options": [
      {
        "id": "a",
        "text": "Luôn khuyến khích giảm số dịch vụ xuống mức tối thiểu"
      },
      {
        "id": "b",
        "text": "Có thể tạo động cơ cung cấp nhiều dịch vụ hơn mức cần thiết và làm tăng chi phí"
      },
      {
        "id": "c",
        "text": "Không thể tính được tiền cho từng dịch vụ"
      },
      {
        "id": "d",
        "text": "Luôn chuyển toàn bộ rủi ro tài chính sang bệnh nhân"
      }
    ],
    "answer": "b",
    "explanation": "Khi thanh toán theo từng dịch vụ, nhà cung cấp có động cơ tăng số lượng dịch vụ được thực hiện; nếu thiếu giám sát, có thể dẫn đến sử dụng quá mức và chi phí cao.",
    "source": "FILE ÔN TẬP.zip → cô-Trang-ktyt.pdf, PDF tr. 1–3; Print 2.pdf, PDF tr. 15; đây là kiến thức trong các câu ôn tập về phương thức thanh toán."
  },
  {
    "id": "extra-047",
    "topic": "Thanh toán dịch vụ y tế",
    "question": "Một hạn chế có thể gặp trong thanh toán theo nhóm bệnh/chẩn đoán (case-based/DRG) là:",
    "options": [
      {
        "id": "a",
        "text": "Không thể xác định trước một khoản chi trả cho mỗi ca bệnh"
      },
      {
        "id": "b",
        "text": "Không tạo bất kỳ động cơ nào ảnh hưởng đến khối lượng dịch vụ"
      },
      {
        "id": "c",
        "text": "Có thể khuyến khích giảm cung cấp dịch vụ cần thiết hoặc phân loại bệnh nhân vào nhóm chi trả cao hơn"
      },
      {
        "id": "d",
        "text": "Luôn khiến chi phí hành chính bằng không"
      }
    ],
    "answer": "c",
    "explanation": "Chi trả theo ca bệnh có thể khuyến khích kiểm soát chi phí, nhưng nếu thiết kế và giám sát kém có thể dẫn đến cung cấp thiếu dịch vụ hoặc phân loại chẩn đoán nhằm nhận mức thanh toán cao hơn.",
    "source": "FILE ÔN TẬP.zip → cô-Trang-ktyt.pdf, PDF tr. 2–3; Print 2.pdf, PDF tr. 16–18."
  },
  {
    "id": "extra-048",
    "topic": "Đánh giá kinh tế y tế",
    "question": "Trong phân tích chi phí – lợi ích (CBA), đầu vào và đầu ra được quy đổi chủ yếu về:",
    "options": [
      {
        "id": "a",
        "text": "Đầu vào là tiền, đầu ra là tiền"
      },
      {
        "id": "b",
        "text": "Đầu vào là tiền, đầu ra chỉ là tỷ lệ tử vong"
      },
      {
        "id": "c",
        "text": "Đầu vào là QALY, đầu ra là DALY"
      },
      {
        "id": "d",
        "text": "Đầu vào là đơn vị tự nhiên, đầu ra là tiền"
      }
    ],
    "answer": "a",
    "explanation": "CBA quy đổi cả chi phí và lợi ích/hậu quả về giá trị tiền tệ để so sánh lợi ích ròng hoặc tỷ số lợi ích – chi phí.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 15 và 18; ĐỀ K18.pdf, PDF tr. 11–14; bộ slide đã gửi không trình bày trực tiếp toàn bộ bảng so sánh này."
  },
  {
    "id": "extra-049",
    "topic": "Đánh giá kinh tế y tế",
    "question": "Phân tích chi phí – hữu dụng (CUA) phù hợp nhất khi:",
    "options": [
      {
        "id": "a",
        "text": "Kết quả các phương án hoàn toàn tương đương"
      },
      {
        "id": "b",
        "text": "Chỉ cần tính chi phí ghi trong sổ kế toán"
      },
      {
        "id": "c",
        "text": "Chất lượng cuộc sống hoặc mức hữu dụng của tình trạng sức khỏe là trọng tâm"
      },
      {
        "id": "d",
        "text": "Mọi lợi ích bắt buộc phải quy đổi thành tiền"
      }
    ],
    "answer": "c",
    "explanation": "CUA sử dụng thước đo hữu dụng, thường như QALY, để phản ánh cả thời gian sống và chất lượng cuộc sống.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 3, 17–18; ĐỀ K18.pdf, PDF tr. 3; đối chiếu: bảng phương pháp đánh giá kinh tế trong tài liệu ôn tập."
  },
  {
    "id": "extra-050",
    "topic": "Đánh giá kinh tế y tế",
    "question": "Đầu ra của phân tích chi phí – hiệu quả (CEA) thường được đo bằng:",
    "options": [
      {
        "id": "a",
        "text": "Chỉ giá trị tiền tệ"
      },
      {
        "id": "b",
        "text": "Đơn vị tự nhiên như số ca được phát hiện, số người khỏi bệnh hoặc số năm sống"
      },
      {
        "id": "c",
        "text": "Chỉ QALY"
      },
      {
        "id": "d",
        "text": "Chỉ tổng chi phí của chương trình"
      }
    ],
    "answer": "b",
    "explanation": "CEA so sánh chi phí với kết quả sức khỏe được đo bằng cùng một đơn vị tự nhiên; chỉ tiêu có thể là chi phí trên mỗi ca bệnh được phát hiện hoặc trên một kết quả lâm sàng.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 3, 15, 17–18; ĐỀ K18.pdf, PDF tr. 2–3; đối chiếu: các bài giảng chi phí kinh tế và hiệu quả."
  },
  {
    "id": "extra-051",
    "topic": "Đánh giá kinh tế y tế",
    "question": "Khi hai phương án có kết quả đầu ra đã được chứng minh là tương đương, phương pháp nào thường được sử dụng để chọn phương án ít tốn kém hơn?",
    "options": [
      {
        "id": "a",
        "text": "CBA"
      },
      {
        "id": "b",
        "text": "CUA"
      },
      {
        "id": "c",
        "text": "CMA"
      },
      {
        "id": "d",
        "text": "CEA"
      }
    ],
    "answer": "c",
    "explanation": "Phân tích chi phí tối thiểu (CMA) áp dụng khi hiệu quả/kết quả của các phương án tương đương; khi đó có thể tập trung so sánh chi phí.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 2–3, 17–18; ĐỀ K18.pdf, PDF tr. 2–3; đối chiếu: bảng phương pháp đánh giá kinh tế trong đề ôn tập."
  },
  {
    "id": "extra-052",
    "topic": "Đánh giá kinh tế y tế",
    "question": "Trong câu hỏi đánh giá một lựa chọn lâm sàng, so sánh phẫu thuật với xạ trị để điều trị ung thư vú thuộc loại lựa chọn nào?",
    "options": [
      {
        "id": "a",
        "text": "Lựa chọn lâm sàng"
      },
      {
        "id": "b",
        "text": "Lựa chọn kỹ thuật thuần túy"
      },
      {
        "id": "c",
        "text": "Lựa chọn phân bổ hành chính"
      },
      {
        "id": "d",
        "text": "Lựa chọn nguồn thu của bảo hiểm"
      }
    ],
    "answer": "a",
    "explanation": "Phẫu thuật và xạ trị là các phương án can thiệp lâm sàng để xử trí bệnh; các lựa chọn kỹ thuật có thể liên quan đến cách thức hoặc công nghệ triển khai một dịch vụ.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 15; ĐỀ K18.pdf, PDF tr. 6–7; kiến thức được trình bày trong các câu ôn tập, không thấy nguyên văn trong sáu PDF slide."
  },
  {
    "id": "extra-053",
    "topic": "Đánh giá kinh tế y tế",
    "question": "Một điều kiện quan trọng để thực hiện CEA so sánh hai can thiệp là:",
    "options": [
      {
        "id": "a",
        "text": "Mỗi can thiệp phải được đánh giá bằng một đơn vị đầu ra không liên quan nhau"
      },
      {
        "id": "b",
        "text": "Chi phí không cần xác định"
      },
      {
        "id": "c",
        "text": "Các kết quả cần so sánh được đo bằng đơn vị tự nhiên phù hợp và có thể đối chiếu"
      },
      {
        "id": "d",
        "text": "Chỉ được sử dụng khi mọi lợi ích đã quy ra tiền"
      }
    ],
    "answer": "c",
    "explanation": "CEA thích hợp khi các kết quả của những can thiệp có thể được đo lường bằng đơn vị tự nhiên có thể so sánh; chi phí được tính bằng tiền và thường báo cáo chi phí trên một đơn vị hiệu quả.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 15 và 17–18; ĐỀ K18.pdf, PDF tr. 6–9."
  },
  {
    "id": "extra-054",
    "topic": "Đánh giá kinh tế y tế",
    "question": "Một người dự kiến sống 10 năm: 2 năm hoàn toàn khỏe mạnh, 3 năm có mức hữu dụng 0,7, 3 năm có mức hữu dụng 0,5 và 2 năm có mức hữu dụng 0,3. Không chiết khấu, số QALY là:",
    "options": [
      {
        "id": "a",
        "text": "5,2"
      },
      {
        "id": "b",
        "text": "6,2"
      },
      {
        "id": "c",
        "text": "7,0"
      },
      {
        "id": "d",
        "text": "10,0"
      }
    ],
    "answer": "b",
    "explanation": "QALY = 2×1 + 3×0,7 + 3×0,5 + 2×0,3 = 2 + 2,1 + 1,5 + 0,6 = 6,2.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 3; ĐỀ K18.pdf, PDF tr. 4."
  },
  {
    "id": "extra-055",
    "topic": "Đánh giá kinh tế y tế",
    "question": "Một người có 10 năm sống kỳ vọng: 3 năm hữu dụng 1, 2,5 năm hữu dụng 0,8, 2 năm hữu dụng 0,4 và 2,5 năm hữu dụng 0,9. Không chiết khấu, QALY là:",
    "options": [
      {
        "id": "a",
        "text": "8,05"
      },
      {
        "id": "b",
        "text": "10,0"
      },
      {
        "id": "c",
        "text": "3,1"
      },
      {
        "id": "d",
        "text": "20,0"
      }
    ],
    "answer": "a",
    "explanation": "QALY = 3×1 + 2,5×0,8 + 2×0,4 + 2,5×0,9 = 3 + 2 + 0,8 + 2,25 = 8,05.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 16; ĐỀ K18.pdf, PDF tr. 4."
  },
  {
    "id": "extra-056",
    "topic": "Đánh giá kinh tế y tế",
    "question": "Một bệnh nhân thiếu máu từ 30 đến 36 tuổi, hệ số bệnh tật là 0,011. Theo công thức YLD = số ca mới × thời gian sống với bệnh × hệ số bệnh tật, YLD bằng:",
    "options": [
      {
        "id": "a",
        "text": "0,011"
      },
      {
        "id": "b",
        "text": "0,033"
      },
      {
        "id": "c",
        "text": "0,066"
      },
      {
        "id": "d",
        "text": "6,6"
      }
    ],
    "answer": "c",
    "explanation": "YLD = 1 × 6 × 0,011 = 0,066 năm sống khỏe mạnh bị mất do bệnh tật.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 3 và 16; ĐỀ K18.pdf, PDF tr. 4."
  },
  {
    "id": "extra-057",
    "topic": "Đánh giá kinh tế y tế",
    "question": "Một nam giới mắc viêm phế quản mạn từ tuổi 37 và sống với bệnh đến cuối tuổi thọ kỳ vọng 80; hệ số bệnh tật 0,17. Giả sử không tính YLL, DALY xấp xỉ là:",
    "options": [
      {
        "id": "a",
        "text": "7,00"
      },
      {
        "id": "b",
        "text": "7,31"
      },
      {
        "id": "c",
        "text": "8,31"
      },
      {
        "id": "d",
        "text": "43,00"
      }
    ],
    "answer": "b",
    "explanation": "YLD = (80 − 37) × 0,17 = 43 × 0,17 = 7,31. Vì bệnh nhân chưa tử vong trong ví dụ này, YLL bằng 0; DALY = YLL + YLD = 7,31.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 3 và 18; ĐỀ K18.pdf, PDF tr. 4; Đề 1.pdf, trang scan 4."
  },
  {
    "id": "extra-058",
    "topic": "Đánh giá kinh tế y tế",
    "question": "Một phụ nữ tử vong do bệnh phổi ở tuổi 40; tuổi thọ kỳ vọng chuẩn nữ được dùng trong đề là 82,5 tuổi. Nếu không có YLD, YLL/DALY bằng:",
    "options": [
      {
        "id": "a",
        "text": "30 năm"
      },
      {
        "id": "b",
        "text": "40 năm"
      },
      {
        "id": "c",
        "text": "42,5 năm"
      },
      {
        "id": "d",
        "text": "82,5 năm"
      }
    ],
    "answer": "c",
    "explanation": "YLL = tuổi thọ kỳ vọng chuẩn − tuổi tử vong = 82,5 − 40 = 42,5 năm. Nếu YLD bằng 0 thì DALY cũng bằng 42,5.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 16; Đề 1.pdf, trang scan 4."
  },
  {
    "id": "extra-059",
    "topic": "Đánh giá kinh tế y tế",
    "question": "Một nam giới mắc bệnh tim ở tuổi 20, tử vong ở tuổi 55, hệ số bệnh tật là 0,4 và tuổi thọ kỳ vọng nam được lấy là 80. Theo cách tính trong đề, DALY là:",
    "options": [
      {
        "id": "a",
        "text": "25"
      },
      {
        "id": "b",
        "text": "35"
      },
      {
        "id": "c",
        "text": "39"
      },
      {
        "id": "d",
        "text": "49"
      }
    ],
    "answer": "c",
    "explanation": "YLL = 80 − 55 = 25. YLD = (55 − 20) × 0,4 = 14. DALY = 25 + 14 = 39.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 16; Đề 1.pdf, trang scan 4."
  },
  {
    "id": "extra-060",
    "topic": "Đánh giá kinh tế y tế",
    "question": "Một cộng đồng có 100 người tử vong trong năm: 10 người tử vong ở tuổi 1, 50 người ở tuổi 60 và 40 người ở tuổi 55. Nếu tuổi thọ chuẩn nam là 80, tổng YLL là:",
    "options": [
      {
        "id": "a",
        "text": "1.500 năm"
      },
      {
        "id": "b",
        "text": "2.000 năm"
      },
      {
        "id": "c",
        "text": "2.500 năm"
      },
      {
        "id": "d",
        "text": "2.790 năm"
      }
    ],
    "answer": "d",
    "explanation": "YLL = 10×(80−1) + 50×(80−60) + 40×(80−55) = 790 + 1.000 + 1.000 = 2.790 năm.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 4; ÔN-TẬP-QUẢN-LÝ-Y-TẾ.pdf, PDF tr. 6–7; đây là bài tính theo tuổi thọ chuẩn giả định trong đề."
  },
  {
    "id": "extra-061",
    "topic": "Đánh giá kinh tế y tế",
    "question": "Theo quy ước cũ được nêu trong một số bộ đề GBD, tỷ lệ chiết khấu năm thường được chọn là:",
    "options": [
      {
        "id": "a",
        "text": "1%"
      },
      {
        "id": "b",
        "text": "2%"
      },
      {
        "id": "c",
        "text": "3%"
      },
      {
        "id": "d",
        "text": "4%"
      }
    ],
    "answer": "c",
    "explanation": "Bộ đề ôn tập sử dụng đáp án 3%. Đây là câu hỏi theo quy ước lịch sử của đề; phương pháp GBD hiện đại có thể khác và không nên mặc định áp dụng quy ước này cho mọi phân tích hiện nay.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 2; ĐỀ K18.pdf, PDF tr. 2; ghi chú: quy ước trong đề, không phải tuyên bố về mọi hướng dẫn hiện hành."
  },
  {
    "id": "extra-062",
    "topic": "Đánh giá kinh tế y tế",
    "question": "Theo quy tắc ngưỡng thường được nêu trong tài liệu WHO-CHOICE cũ, một can thiệp được xếp “rất chi phí – hiệu quả” khi ICER thấp hơn ngưỡng nào?",
    "options": [
      {
        "id": "a",
        "text": "Dưới 1 lần GDP bình quân đầu người"
      },
      {
        "id": "b",
        "text": "Dưới 2 lần GDP bình quân đầu người"
      },
      {
        "id": "c",
        "text": "Dưới 3 lần GDP bình quân đầu người"
      },
      {
        "id": "d",
        "text": "Luôn dưới 10 lần GDP bình quân đầu người"
      }
    ],
    "answer": "c",
    "explanation": "Một số tài liệu/đề cũ sử dụng ngưỡng ICER dưới 3 lần GDP bình quân đầu người. Đây là quy tắc lịch sử thường được nhắc đến trong đề, không phải chuẩn phổ quát thay thế cho đánh giá ngưỡng theo bối cảnh hiện nay.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 10; đối chiếu: đề có câu ICER theo WHO-CHOICE; sáu PDF slide không trình bày trực tiếp ngưỡng này."
  },
  {
    "id": "extra-063",
    "topic": "Lập kế hoạch tài chính",
    "question": "Cơ sở quan trọng nhất giúp phân chia công việc và chi phí theo từng hạng mục khi lập dự toán tài chính y tế là:",
    "options": [
      {
        "id": "a",
        "text": "Bảng lương năm trước"
      },
      {
        "id": "b",
        "text": "Cấu trúc phân chia công việc (WBS)"
      },
      {
        "id": "c",
        "text": "Danh sách toàn bộ nhân viên"
      },
      {
        "id": "d",
        "text": "Biên bản kiểm kê tài sản đơn lẻ"
      }
    ],
    "answer": "b",
    "explanation": "WBS chia dự án/công việc thành các phần việc và hạng mục có thể quản lý, qua đó giúp xác định chi phí theo từng phần để lập dự toán.",
    "source": "FILE ÔN TẬP.zip → YDP 2025.pdf, PDF tr. 3/11 (trang scan 2); đối chiếu: LẬP KẾ HOẠCH TÀI CHÍNH KINH TẾ Y TẾ.pdf, PDF tr. 15."
  },
  {
    "id": "extra-064",
    "topic": "Lập kế hoạch tài chính",
    "question": "Theo câu hỏi trong đề ôn tập, kế hoạch tài chính y tế hỗ trợ trực tiếp nhất cho công tác quản lý, điều hành của nhóm nào?",
    "options": [
      {
        "id": "a",
        "text": "Chỉ nhân viên y tế"
      },
      {
        "id": "b",
        "text": "Chỉ người sử dụng dịch vụ"
      },
      {
        "id": "c",
        "text": "Chỉ người thực hiện kế hoạch"
      },
      {
        "id": "d",
        "text": "Người quản lý chung và quản lý tài chính"
      }
    ],
    "answer": "d",
    "explanation": "Kế hoạch tài chính là công cụ quản lý để xác định nguồn lực, ngân sách, trách nhiệm và theo dõi việc thực hiện cho cả cấp quản lý chung và quản lý tài chính.",
    "source": "FILE ÔN TẬP.zip → YDP 2025.pdf, PDF tr. 4/11 (trang scan 3); đối chiếu: LẬP KẾ HOẠCH TÀI CHÍNH KINH TẾ Y TẾ.pdf."
  },
  {
    "id": "extra-065",
    "topic": "Hệ thống y tế",
    "question": "Theo cách tiếp cận hệ thống, đầu vào nào sau đây KHÔNG thuộc nhóm nguồn lực/đầu vào của hệ thống y tế?",
    "options": [
      {
        "id": "a",
        "text": "Tài chính"
      },
      {
        "id": "b",
        "text": "Thông tin"
      },
      {
        "id": "c",
        "text": "Cung ứng dịch vụ"
      },
      {
        "id": "d",
        "text": "Cải thiện sức khỏe dân số"
      }
    ],
    "answer": "d",
    "explanation": "Trong khung hệ thống y tế thường dùng, tài chính, thông tin và cung ứng dịch vụ thuộc các cấu phần/nguồn lực của hệ thống. Cải thiện sức khỏe là kết quả/mục tiêu đầu ra ở cấp dân số.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 25; ÔN-TẬP-QUẢN-LÝ-Y-TẾ.pdf, PDF tr. 9–10; nội dung khung hệ thống y tế không được trình bày trực tiếp trong sáu PDF slide."
  },
  {
    "id": "extra-066",
    "topic": "Hệ thống y tế",
    "question": "Một mạng lưới/tổ chức do Nhà nước thiết lập nhằm chăm sóc sức khỏe người dân trong một vùng lãnh thổ hoặc quốc gia được gọi là:",
    "options": [
      {
        "id": "a",
        "text": "Sức khỏe công cộng"
      },
      {
        "id": "b",
        "text": "Quản lý sức khỏe"
      },
      {
        "id": "c",
        "text": "Hệ thống y tế"
      },
      {
        "id": "d",
        "text": "Kinh tế vĩ mô"
      }
    ],
    "answer": "c",
    "explanation": "Hệ thống y tế bao gồm các tổ chức, nguồn lực, con người và hoạt động được tổ chức để nâng cao, duy trì hoặc phục hồi sức khỏe dân cư.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 10; chủ đề thuộc phần quản lý/hệ thống y tế, không nằm trực tiếp trong sáu PDF slide KTYT đã gửi."
  },
  {
    "id": "extra-067",
    "topic": "Hệ thống y tế",
    "question": "Y tế cơ sở xã/phường giữ vai trò nào trong hệ thống chăm sóc sức khỏe?",
    "options": [
      {
        "id": "a",
        "text": "Tuyến cuối cùng, chỉ tiếp nhận ca bệnh phức tạp"
      },
      {
        "id": "b",
        "text": "Tuyến đầu tiên thường tiếp xúc với cộng đồng và là nền tảng của hệ thống y tế"
      },
      {
        "id": "c",
        "text": "Chỉ làm nhiệm vụ quản lý tài chính bệnh viện"
      },
      {
        "id": "d",
        "text": "Chỉ nghiên cứu và đào tạo sau đại học"
      }
    ],
    "answer": "b",
    "explanation": "Y tế cơ sở là tuyến gần dân, thực hiện chăm sóc ban đầu, dự phòng và tiếp nhận ban đầu; vì vậy thường là điểm tiếp xúc đầu tiên giữa người dân và hệ thống y tế.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 11 và 13; đây là câu thuộc bộ đề quản lý/hệ thống y tế."
  },
  {
    "id": "extra-068",
    "topic": "Hệ thống y tế",
    "question": "Theo bộ câu hỏi về hệ thống y tế quốc tế trong đề, các thành phần được nêu gồm Đại hội đồng, Tổng giám đốc WHO và giám đốc y tế khu vực. Đáp án phù hợp nhất là:",
    "options": [
      {
        "id": "a",
        "text": "Chỉ Đại hội đồng"
      },
      {
        "id": "b",
        "text": "Chỉ Tổng giám đốc WHO"
      },
      {
        "id": "c",
        "text": "Chỉ giám đốc khu vực"
      },
      {
        "id": "d",
        "text": "Tất cả các ý trên"
      }
    ],
    "answer": "d",
    "explanation": "Câu hỏi gốc liệt kê cả ba bộ phận và phương án tổng hợp “tất cả các ý trên”. Tên gọi có thể đã được giản lược trong đề ôn tập.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 10–11; không được trình bày trực tiếp trong sáu PDF slide KTYT."
  },
  {
    "id": "extra-069",
    "topic": "Hệ thống y tế",
    "question": "Theo cách phân loại trong bộ đề quản lý y tế, trung tâm y tế dự phòng được xem là:",
    "options": [
      {
        "id": "a",
        "text": "Một cơ sở chỉ cung cấp dịch vụ nội trú chuyên sâu"
      },
      {
        "id": "b",
        "text": "Một bộ phận quan trọng hỗ trợ hoạt động chăm sóc sức khỏe ban đầu"
      },
      {
        "id": "c",
        "text": "Một cơ quan chỉ quản lý thuế"
      },
      {
        "id": "d",
        "text": "Một tổ chức không thuộc hệ thống y tế"
      }
    ],
    "answer": "b",
    "explanation": "Trung tâm y tế dự phòng thực hiện các hoạt động dự phòng và hỗ trợ chuyên môn cho mạng lưới chăm sóc ban đầu theo mô hình tổ chức được mô tả trong bộ đề.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 12; nội dung quản lý tổ chức y tế không thấy trực tiếp trong sáu PDF slide."
  },
  {
    "id": "extra-070",
    "topic": "Quản lý y tế",
    "question": "Theo bộ đề quản lý, phương pháp giáo dục trong quản lý có đặc trưng nào?",
    "options": [
      {
        "id": "a",
        "text": "Giúp nhân viên tự chủ và tự giác thực hiện nhiệm vụ"
      },
      {
        "id": "b",
        "text": "Chỉ dựa vào mệnh lệnh và kỷ luật cứng"
      },
      {
        "id": "c",
        "text": "Thay thế hoàn toàn mọi phương pháp quản lý khác"
      },
      {
        "id": "d",
        "text": "Chỉ tập trung vào phạt vi phạm"
      }
    ],
    "answer": "a",
    "explanation": "Phương pháp giáo dục hướng đến tác động nhận thức và động lực, giúp nhân viên tự giác và chủ động hơn trong việc thực hiện nhiệm vụ.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 13; đây là nội dung quản lý y tế, không được trình bày trực tiếp trong sáu PDF slide KTYT."
  },
  {
    "id": "extra-071",
    "topic": "Quản lý y tế",
    "question": "Ví dụ nào phù hợp nhất với phương pháp hành chính trong quản lý?",
    "options": [
      {
        "id": "a",
        "text": "Chỉ động viên tinh thần mà không có quy định"
      },
      {
        "id": "b",
        "text": "Xây dựng quy định và kỷ luật của tổ chức"
      },
      {
        "id": "c",
        "text": "Để mọi cá nhân tự chọn mọi quy trình không cần thống nhất"
      },
      {
        "id": "d",
        "text": "Chỉ trao đổi không chính thức giữa đồng nghiệp"
      }
    ],
    "answer": "b",
    "explanation": "Phương pháp hành chính sử dụng quy định, mệnh lệnh và kỷ luật chính thức để tổ chức và điều hành hoạt động.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 13; đây là nội dung quản lý y tế, không được trình bày trực tiếp trong sáu PDF slide KTYT."
  },
  {
    "id": "extra-072",
    "topic": "Quản lý y tế",
    "question": "Nguyên tắc quản lý nào thể hiện sự tin tưởng và giao quyền cho cấp dưới?",
    "options": [
      {
        "id": "a",
        "text": "Phân chia công việc"
      },
      {
        "id": "b",
        "text": "Giám sát mọi việc theo cách vi mô"
      },
      {
        "id": "c",
        "text": "Thống nhất mệnh lệnh"
      },
      {
        "id": "d",
        "text": "Ủy quyền"
      }
    ],
    "answer": "d",
    "explanation": "Ủy quyền là giao quyền hạn và trách nhiệm phù hợp để cấp dưới thực hiện công việc; đây là biểu hiện của sự tin tưởng trong quản lý.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 13; đây là nội dung quản lý y tế, không được trình bày trực tiếp trong sáu PDF slide KTYT."
  },
  {
    "id": "extra-073",
    "topic": "Tài chính y tế",
    "question": "Nguồn tài chính nào được xem là quỹ tiền tệ tập trung của Nhà nước trong các lựa chọn sau?",
    "options": [
      {
        "id": "a",
        "text": "Ngân sách nhà nước"
      },
      {
        "id": "b",
        "text": "Vốn vay của một công ty tư nhân"
      },
      {
        "id": "c",
        "text": "Tài sản riêng của chủ doanh nghiệp"
      },
      {
        "id": "d",
        "text": "Doanh thu của một hộ gia đình"
      }
    ],
    "answer": "a",
    "explanation": "Ngân sách nhà nước tập trung các nguồn thu công để phân bổ cho các chức năng của Nhà nước, trong đó có y tế.",
    "source": "FILE ÔN TẬP.zip → Print 2.pdf, PDF tr. 15, 19, 25; nội dung này được lặp lại nhiều lần trong các bộ đề."
  },
  {
    "id": "extra-074",
    "topic": "Kinh tế y tế",
    "question": "Một công ty dược có nguồn lực hạn chế và chọn sản xuất thuốc điều trị tăng huyết áp vì nhu cầu thị trường cao hơn thuốc điều trị bệnh hiếm. Yếu tố quyết định gần nhất là:",
    "options": [
      {
        "id": "a",
        "text": "Chỉ khả năng độc quyền"
      },
      {
        "id": "b",
        "text": "Chỉ mức thuế của Nhà nước"
      },
      {
        "id": "c",
        "text": "Cầu thị trường và việc phải lựa chọn khi nguồn lực khan hiếm"
      },
      {
        "id": "d",
        "text": "Không có sự lựa chọn kinh tế nào"
      }
    ],
    "answer": "c",
    "explanation": "Khi nguồn lực giới hạn, nhà sản xuất lựa chọn sản phẩm dựa trên cầu thị trường, chi phí và lợi ích kỳ vọng; đây là một quyết định phân bổ nguồn lực.",
    "source": "FILE ÔN TẬP.zip → TCQLYT.pdf, PDF tr. 4–6 (ảnh chụp quiz); đối chiếu: (SLIDE) Chương 1 ĐẠI CƯƠNG KINH TẾ Y TẾ.pdf, phần khan hiếm và lựa chọn."
  },
  {
    "id": "extra-075",
    "topic": "Kinh tế y tế",
    "question": "Một bệnh viện đầu tư hệ thống khám bằng trí tuệ nhân tạo để rút ngắn thời gian chẩn đoán, giảm chi phí và sử dụng nhân lực hiệu quả hơn. Quyết định này chủ yếu trả lời câu hỏi cơ bản nào của kinh tế học?",
    "options": [
      {
        "id": "a",
        "text": "Sản xuất cái gì?"
      },
      {
        "id": "b",
        "text": "Sản xuất như thế nào?"
      },
      {
        "id": "c",
        "text": "Sản xuất cho ai?"
      },
      {
        "id": "d",
        "text": "Ai sở hữu nguồn lực?"
      }
    ],
    "answer": "b",
    "explanation": "Lựa chọn công nghệ và quy trình sử dụng để cung cấp dịch vụ thuộc câu hỏi “sản xuất như thế nào?”.",
    "source": "FILE ÔN TẬP.zip → TCQLYT.pdf, PDF tr. 7–8 (ảnh chụp quiz); đối chiếu: (SLIDE) Chương 1 ĐẠI CƯƠNG KINH TẾ Y TẾ.pdf, phần ba câu hỏi kinh tế cơ bản."
  },
  {
    "id": "extra-076",
    "topic": "Kinh tế y tế",
    "question": "Một phòng khám giảm thời gian chờ từ 4 giờ xuống 30 phút trong khi giá khám không đổi. Theo lý thuyết cầu, điều gì có khả năng xảy ra?",
    "options": [
      {
        "id": "a",
        "text": "Lượng cầu dịch vụ khám tăng do khả năng tiếp cận tốt hơn"
      },
      {
        "id": "b",
        "text": "Lượng cầu chắc chắn giảm về 0"
      },
      {
        "id": "c",
        "text": "Đường cung của toàn thị trường luôn dịch chuyển sang trái"
      },
      {
        "id": "d",
        "text": "Giá cân bằng bắt buộc phải tăng ngay lập tức"
      }
    ],
    "answer": "a",
    "explanation": "Thời gian chờ là một thuộc tính của khả năng tiếp cận dịch vụ. Khi chờ đợi giảm, dịch vụ có thể hấp dẫn hơn và lượng cầu/lượt sử dụng tăng dù giá tiền không đổi.",
    "source": "FILE ÔN TẬP.zip → TCQLYT.pdf, PDF tr. 9–10 (ảnh chụp quiz); đối chiếu: (SLIDE) Chương 1 ĐẠI CƯƠNG KINH TẾ Y TẾ.pdf, phần các yếu tố ảnh hưởng cầu."
  },
  {
    "id": "extra-077",
    "topic": "Kinh tế y tế",
    "question": "Một bệnh nhân chọn phòng khám tư dù giá cao hơn bệnh viện công vì tin tưởng bác sĩ và được khám nhanh hơn. Giải thích phù hợp nhất là:",
    "options": [
      {
        "id": "a",
        "text": "Giá không bao giờ ảnh hưởng đến cầu dịch vụ y tế"
      },
      {
        "id": "b",
        "text": "Người bệnh luôn chọn nơi có giá thấp nhất"
      },
      {
        "id": "c",
        "text": "Quyết định chịu ảnh hưởng đồng thời bởi giá, chất lượng và thời gian tiếp cận"
      },
      {
        "id": "d",
        "text": "Thị trường y tế không có cạnh tranh"
      }
    ],
    "answer": "c",
    "explanation": "Giá là một yếu tố quan trọng nhưng không phải yếu tố duy nhất. Chất lượng cảm nhận, niềm tin và thời gian chờ cũng ảnh hưởng lựa chọn cơ sở khám chữa bệnh.",
    "source": "FILE ÔN TẬP.zip → TCQLYT.pdf, PDF tr. 10–12 (ảnh chụp quiz); đối chiếu: (SLIDE) Chương 1 ĐẠI CƯƠNG KINH TẾ Y TẾ.pdf, phần cung – cầu dịch vụ y tế."
  },
  {
    "id": "extra-078",
    "topic": "Kinh tế y tế",
    "question": "Sau khi giá dịch vụ khám bệnh tăng, số lượt khám tại phòng khám giảm rõ rệt. Hiện tượng này minh họa trực tiếp:",
    "options": [
      {
        "id": "a",
        "text": "Luật cung"
      },
      {
        "id": "b",
        "text": "Luật cầu"
      },
      {
        "id": "c",
        "text": "Tính ngoại biên"
      },
      {
        "id": "d",
        "text": "Thất bại thị trường do bất đối xứng thông tin"
      }
    ],
    "answer": "b",
    "explanation": "Các yếu tố khác không đổi, giá tăng thường làm lượng cầu giảm; đây là biểu hiện của luật cầu.",
    "source": "FILE ÔN TẬP.zip → TCQLYT.pdf, PDF tr. 11–12 (ảnh chụp quiz); đối chiếu: (SLIDE) Chương 1 ĐẠI CƯƠNG KINH TẾ Y TẾ.pdf, PDF tr. 20–30."
  },
  {
    "id": "extra-079",
    "topic": "Kinh tế y tế",
    "question": "Một bác sĩ biết bệnh nhân chỉ bị cảm lạnh thông thường nhưng vẫn kê kháng sinh vì bệnh nhân cho rằng thuốc mạnh sẽ mau khỏi. Tình huống này phản ánh rõ nhất:",
    "options": [
      {
        "id": "a",
        "text": "Cạnh tranh hoàn hảo"
      },
      {
        "id": "b",
        "text": "Thị trường tự điều tiết hoàn toàn"
      },
      {
        "id": "c",
        "text": "Bất đối xứng thông tin giữa người cung cấp và người bệnh"
      },
      {
        "id": "d",
        "text": "Quy luật cung"
      }
    ],
    "answer": "c",
    "explanation": "Bác sĩ có chuyên môn và thông tin lâm sàng vượt trội so với người bệnh; nếu quyết định điều trị không phù hợp, sự chênh lệch thông tin có thể dẫn đến lựa chọn không tối ưu.",
    "source": "FILE ÔN TẬP.zip → TCQLYT.pdf, PDF tr. 4 và 8–10 (ảnh chụp quiz); đối chiếu: (SLIDE) Chương 1 ĐẠI CƯƠNG KINH TẾ Y TẾ.pdf, PDF tr. 52–55."
  },
  {
    "id": "extra-081",
    "topic": "Bảo hiểm y tế",
    "question": "Trong một hệ thống tài chính y tế công bằng, tiêu chí nào sau đây KHÔNG phải là mục tiêu công bằng?",
    "options": [
      {
        "id": "a",
        "text": "Bảo vệ người dân trước rủi ro tài chính do chi phí y tế"
      },
      {
        "id": "b",
        "text": "Giảm nguy cơ hộ gia đình rơi vào nghèo đói vì chi phí điều trị"
      },
      {
        "id": "c",
        "text": "Tăng khả năng huy động và phân bổ nguồn lực công bằng"
      },
      {
        "id": "d",
        "text": "Ưu tiên tối đa hóa lợi nhuận của cơ sở cung ứng dịch vụ"
      }
    ],
    "answer": "d",
    "explanation": "Tài chính y tế công bằng chú trọng bảo vệ rủi ro tài chính và phân bổ nguồn lực công bằng, không đặt tối đa hóa lợi nhuận nhà cung cấp làm mục tiêu công bằng cốt lõi.",
    "source": "FILE ÔN TẬP.zip → YDP 2025.pdf, PDF tr. 8/11 (trang scan 7); câu thuộc bộ đề về tài chính y tế."
  },
  {
    "id": "extra-082",
    "topic": "Tài chính y tế",
    "question": "Trước giai đoạn Đổi mới, nguồn tài chính chủ yếu cho hệ thống y tế Việt Nam theo câu hỏi trong đề là:",
    "options": [
      {
        "id": "a",
        "text": "Bảo hiểm y tế tư nhân"
      },
      {
        "id": "b",
        "text": "Viện phí hộ gia đình"
      },
      {
        "id": "c",
        "text": "Ngân sách nhà nước"
      },
      {
        "id": "d",
        "text": "Vay quốc tế"
      }
    ],
    "answer": "c",
    "explanation": "Đáp án được khoanh trong bản scan là ngân sách nhà nước. Đây là câu hỏi lịch sử theo bộ đề, với mốc thời gian nêu ở câu gốc.",
    "source": "FILE ÔN TẬP.zip → YDP 2025.pdf, PDF tr. 8/11 (trang scan 7); đáp án theo lựa chọn đánh dấu trong bản scan."
  },
  {
    "id": "extra-083",
    "topic": "Bảo hiểm y tế",
    "question": "Một cộng đồng có 10.058 người; người già chiếm 18%, trẻ em chiếm 18%. Xác suất sử dụng dịch vụ hằng năm là 30% ở hai nhóm này và 16% ở phần dân số còn lại. Xác suất sử dụng chung xấp xỉ là:",
    "options": [
      {
        "id": "a",
        "text": "16%"
      },
      {
        "id": "b",
        "text": "18%"
      },
      {
        "id": "c",
        "text": "21%"
      },
      {
        "id": "d",
        "text": "30%"
      }
    ],
    "answer": "c",
    "explanation": "Người già và trẻ em chiếm 36%; nhóm còn lại 64%. Xác suất chung = 0,18×0,30 + 0,18×0,30 + 0,64×0,16 = 0,2104 ≈ 21%.",
    "source": "FILE ÔN TẬP.zip → YDP 2025.pdf, PDF tr. 8/11 (trang scan 7); phép tính được kiểm tra lại từ các tỷ lệ trong bản scan."
  }
];
